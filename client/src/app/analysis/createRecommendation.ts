import { Factor, FactorTraits } from '@/domain/Factor'
import { GameResponse, GameResult } from '@/domain/Game'
import { GeoLocation } from '@/domain/Geolocation'
import { CandidateTrait, MajorTrait, ResponseTraits, UniversityTrait } from '@/domain/Trait'

type Major = {
  name: string
  syllabusUrl: string
  traits: {
    trait: MajorTrait,
    points: number
  }[]
}

type University = {
  name: string
  location: GeoLocation
  traits: {
    trait: UniversityTrait,
    points: number
  }[],
  majors: Major[]
}

type CandidateProfile = {
  location: GeoLocation
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

function compareResponses(r1: GameResponse, r2: GameResponse): boolean {
  return r1.answer === r2.answer && r1.question === r2.question
}

function gameResultToCandidateProfile(
  gameResult: GameResult,
  responsesTraits: ResponseTraits[]
): CandidateProfile {
  return {
    location: gameResult.location,
    traits: gameResult.responses.flatMap((response) => {
      const responseTraits = responsesTraits.find(it => compareResponses(it.response, response))
      return responseTraits?.traits || []
    })
  }
}

type FactorScore = {
  factor: Factor,
  score: number
}

type CandidateProfileWithFactorScores = {
  candidateProfile: CandidateProfile
  factorScores: FactorScore[]
}

function calculateFactorScores(
  targetTraits: FactorTraits["traits"],
  factorsTraits: FactorTraits[]
): FactorScore[] {
  return factorsTraits.map(({ factor, traits }) => {
    const score = traits.map((factorTrait) => {
      const targetTrait = targetTraits.find(it => it.trait === factorTrait.trait)
      return (targetTrait !== undefined)
        ? targetTrait.points * factorTrait.points
        : 0
    })
      .reduce((a, b) => a + b, 0)
    return { factor, score }
  })
}

function candidateProfileWithFactorScores(
  candidateProfile: CandidateProfile,
  factorsTraits: FactorTraits[]
): CandidateProfileWithFactorScores {
  const factorScores = calculateFactorScores(candidateProfile.traits, factorsTraits)
  return { candidateProfile, factorScores }
}

type MajorWithFactorScores = {
  major: Major,
  factorScores: FactorScore[]
}

function majorWithFactorScores(
  major: Major,
  factorsTraits: FactorTraits[]
): MajorWithFactorScores {
  const factorScores = calculateFactorScores(major.traits, factorsTraits)
  return { major, factorScores }
}

type UniversityWithFactorScores = {
  university: Omit<University, "majors"> & {
    majors: MajorWithFactorScores[],
  }
  factorScores: FactorScore[]
}

function universityWithFactorScores(
  university: University,
  factorsTraits: FactorTraits[]
): UniversityWithFactorScores {
  const factorScores = calculateFactorScores(university.traits, factorsTraits)
  return {
    university: {
      ...university,
      majors: university.majors.map(it => majorWithFactorScores(it, factorsTraits)),
    },
    factorScores
  }
}

type MajorRanking = {
  university: University
  major: Major
  ranking: number
}

type UniveristyRanking = {
  university: University
  majorRankings: MajorRanking[]
  ranking: number
}

type CandidateRecommendation = {
  topUniversities: UniveristyRanking[],
  topMajors: MajorRanking[]
}

function calculateFactorsScoresDistance(
  compareFrom: FactorScore[],
  compareTo: FactorScore[]
) {
  return compareFrom
    .map(fromFactorScore => {
      const toFactorScore = compareTo.find(it => it.factor === fromFactorScore.factor)
      const toScore = toFactorScore?.score || 0
      const fromScore = fromFactorScore.score
      return fromScore > toScore
        ? fromScore - toScore
        : toScore - fromScore
    })
    .reduce((a, b) => a + b, 0)
}

function rankMajor(
  university: University,
  majorWithScores: MajorWithFactorScores,
  profileWithScores: CandidateProfileWithFactorScores
): MajorRanking {
  const ranking = calculateFactorsScoresDistance(profileWithScores.factorScores, majorWithScores.factorScores)
  return {
    university,
    major: majorWithScores.major,
    ranking
  }
}

function rankUniversity(
  universityWithScores: UniversityWithFactorScores,
  profileWithScores: CandidateProfileWithFactorScores
): UniveristyRanking {
  const university: University = {
    ...universityWithScores.university,
    majors: universityWithScores.university.majors.map(it => it.major)
  }
  const majorRankings = universityWithScores.university.majors.map(it => rankMajor(university, it, profileWithScores))
  const universityRanking = calculateFactorsScoresDistance(
    profileWithScores.factorScores, 
    universityWithScores.factorScores
  ) + majorRankings.reduce((r1, r2) => r1+r2.ranking, 0)
  return {
    university: {
      ...universityWithScores.university,
      majors: universityWithScores.university.majors.map(it => it.major)
    },
    majorRankings,
    ranking: universityRanking,
  }
}

export function createRecommendation(
  gameResult: GameResult,
  universities: University[],
  responsesTraits: ResponseTraits[],
  factorsTraits: FactorTraits[]
): CandidateRecommendation {
  const profile = gameResultToCandidateProfile(gameResult, responsesTraits)
  const profileWithScores = candidateProfileWithFactorScores(profile, factorsTraits)
  const universitiesWithScores = universities.map(it => universityWithFactorScores(it, factorsTraits))
  const rankedUniversities = universitiesWithScores.map(it => rankUniversity(it, profileWithScores))
  const rankedMajors = rankedUniversities.flatMap(it => it.majorRankings)
  const topUniversities = rankedUniversities.sort((a, b) => a.ranking - b.ranking).slice(0, 10)
  const topMajors = rankedMajors.sort((a, b) => a.ranking - b.ranking).slice(0, 10)
  return {
    topUniversities,
    topMajors
  }
}
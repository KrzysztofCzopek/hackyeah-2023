import { FactorTraits } from '@/domain/Factor'
import { GameResult } from '@/domain/Game'
import { ResponseTraits } from '@/domain/Trait'
import { University } from '@/domain/University'
import { candidateProfileWithFactorScores, universityWithFactorScores } from './calculateFactorScores'
import { UniveristyRanking, MajorRanking, calculateUniversityRanking } from './calculateRanking'
import { gameResultToCandidateProfile } from './gameResultToCandidateProfile'

type CandidateRecommendation = {
  topUniversities: UniveristyRanking[],
  topMajors: MajorRanking[]
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
  const rankedUniversities = universitiesWithScores.map(it => 
    calculateUniversityRanking(gameResult.location, it, profileWithScores)
  )
  const rankedMajors = rankedUniversities.flatMap(it => it.majorRankings)
  const topUniversities = rankedUniversities
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, Math.min(rankedUniversities.length, 10))
  const topMajors = rankedMajors
    .sort((a, b) => b.ranking - a.ranking)
    .slice(0, Math.min(rankedMajors.length, 10))
  // console.dir({
  //   scores: {
  //     profile: profileWithScores,
  //     universities: universitiesWithScores,
  //   },
  //   ranked: {
  //     universities: rankedUniversities,
  //     majors: rankedMajors
  //   }
  // }, { depth: null })
  return {
    topUniversities,
    topMajors
  }
}
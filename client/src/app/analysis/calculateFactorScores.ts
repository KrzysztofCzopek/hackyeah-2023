import { Factor, FactorTraits } from '@/domain/Factor';
import { Major } from '@/domain/Major';
import { University } from '@/domain/University';
import { CandidateProfile } from './gameResultToCandidateProfile';

export type FactorScore = {
  factor: Factor,
  score: number | null
}

export function calculateFactorScores(
  targetTraits: FactorTraits["traits"],
  factorsTraits: FactorTraits[]
): FactorScore[] {
  return factorsTraits.map(({ factor, traits }) => {
    const traitScores = traits
      .map((factorTrait) => {
        const targetTraitPoints = targetTraits
          .filter(it => it.trait === factorTrait.trait)
          .map(it => it.points * factorTrait.points)
        if (targetTraitPoints.length === 0) return null
        else return targetTraitPoints.reduce((a: number, b: number | null) => a + (b || 0), 0)
      })
    if (traitScores.every(it => it === null)) return { factor, score: null }
    else return { factor, score: traitScores.reduce((a: number, b: number | null) => a + (b || 0), 0) };
  })
}

export function calculateFactorsScoresDistance(
  compareFrom: FactorScore[],
  compareTo: FactorScore[]
) {
  return compareFrom
    .map(fromFactorScore => {
      const toFactorScore = compareTo.find(it => it.factor === fromFactorScore.factor)
      const toScore = toFactorScore?.score || 0
      const fromScore = fromFactorScore.score
      if (fromScore === null) return 0
      return fromScore > toScore
        ? fromScore - toScore
        : toScore - fromScore
    })
    .reduce((a, b) => a + b, 0)
}


export type CandidateProfileWithFactorScores = {
  candidateProfile: CandidateProfile
  factorScores: FactorScore[]
}

export function candidateProfileWithFactorScores(
  candidateProfile: CandidateProfile,
  factorsTraits: FactorTraits[]
): CandidateProfileWithFactorScores {
  const factorScores = calculateFactorScores(candidateProfile.traits, factorsTraits)
  return { candidateProfile, factorScores }
}

export type MajorWithFactorScores = {
  major: Major,
  factorScores: FactorScore[]
}

export function majorWithFactorScores(
  major: Major,
  factorsTraits: FactorTraits[]
): MajorWithFactorScores {
  const factorScores = calculateFactorScores(major.traits, factorsTraits)
  return { major, factorScores }
}

export type UniversityWithFactorScores = {
  university: Omit<University, "majors"> & {
    majors: MajorWithFactorScores[],
  }
  factorScores: FactorScore[]
}

export function universityWithFactorScores(
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
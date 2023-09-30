import { Factor, FactorTraits } from '@/domain/Factor';
import { Major } from '@/domain/Major';
import { University } from '@/domain/University';
import { CandidateProfile } from './gameResultToCandidateProfile';

export type FactorScore = {
  factor: Factor,
  score: number
}

export function calculateFactorScores(
  targetTraits: FactorTraits["traits"],
  factorsTraits: FactorTraits[]): FactorScore[] {
  return factorsTraits.map(({ factor, traits }) => {
    const score = traits.map((factorTrait) => {
      const targetTrait = targetTraits.find(it => it.trait === factorTrait.trait);
      return (targetTrait !== undefined)
        ? targetTrait.points * factorTrait.points
        : 0;
    })
      .reduce((a, b) => a + b, 0);
    return { factor, score };
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
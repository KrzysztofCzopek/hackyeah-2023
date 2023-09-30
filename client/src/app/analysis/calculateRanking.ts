import { Major } from '@/domain/Major';
import { University } from '@/domain/University';
import {
  MajorWithFactorScores,
  CandidateProfileWithFactorScores,
  calculateFactorsScoresDistance,
  UniversityWithFactorScores
} from './calculateFactorScores';

export type MajorRanking = {
  university: University
  major: Major
  ranking: number
}

export type UniveristyRanking = {
  university: University
  majorRankings: MajorRanking[]
  ranking: number
}

export function calculateMajorRanking(
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

export function calculateUniversityRanking(
  universityWithScores: UniversityWithFactorScores,
  profileWithScores: CandidateProfileWithFactorScores
): UniveristyRanking {
  const university: University = {
    ...universityWithScores.university,
    majors: universityWithScores.university.majors.map(it => it.major)
  };
  const majorRankings = universityWithScores.university.majors.map(it => calculateMajorRanking(university, it, profileWithScores));
  const universityRanking = calculateFactorsScoresDistance(
    profileWithScores.factorScores,
    universityWithScores.factorScores
  ) + majorRankings.reduce((r1, r2) => r1 + r2.ranking, 0);
  return {
    university: {
      ...universityWithScores.university,
      majors: universityWithScores.university.majors.map(it => it.major)
    },
    majorRankings,
    ranking: universityRanking,
  };
}

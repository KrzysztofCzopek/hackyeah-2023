import { Major } from '@/domain/Major';
import { University } from '@/domain/University';
import {
  MajorWithFactorScores,
  CandidateProfileWithFactorScores,
  calculateFactorsScoresDistance,
  UniversityWithFactorScores
} from './calculateFactorScores';
import { GeoLocation } from '@/domain/Geolocation';

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
  userLocation: GeoLocation,
  universityWithScores: UniversityWithFactorScores,
  profileWithScores: CandidateProfileWithFactorScores
): UniveristyRanking {
  const university: University = {
    ...universityWithScores.university,
    majors: universityWithScores.university.majors.map(it => it.major)
  };
  const majorRankings = universityWithScores.university.majors.map(it => calculateMajorRanking(university, it, profileWithScores));
  const locationDistance = Math.sqrt(
    Math.pow(userLocation.lat - university.location.lat, 2) +
    Math.pow(userLocation.long - university.location.long, 2)
  )
  const locationDistanceFactor = locationDistance
  const universityRanking = calculateFactorsScoresDistance(
    profileWithScores.factorScores,
    universityWithScores.factorScores
  ) + majorRankings.reduce((r1, r2) => r1 + r2.ranking, 0) - locationDistanceFactor;
  return {
    university: {
      ...universityWithScores.university,
      majors: universityWithScores.university.majors.map(it => it.major)
    },
    majorRankings,
    ranking: universityRanking,
  };
}

import { GameResponse } from './Game'

export interface ResponseTraits {
  response: GameResponse
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

export enum CandidateTrait {
  AFFINITY_HUMANITIES = 'CANDIDATE_HUMANITIES',
  AFFINITY_SCIENCE = 'CANDIDATE_SCIENCE',
  AFFINITY_ART = 'CANDIDATE_ART',
  EXTRACURRICULARS = 'CANDIDATE_EXTRACURRICULARS'
}

export enum UniversityTrait {
  EXTRACURRICULARS = 'UNIVERSITY_EXTRACURRICULARS'
}

export enum MajorTrait {
  AFFINITY_HUMANITIES = 'MAJOR_HUMANITIES',
  AFFINITY_SCIENCE = 'MAJOR_SCIENCE',
  AFFINITY_ART = 'MAJOR_ART',
}

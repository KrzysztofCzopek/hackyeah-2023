import { GameResponse } from './Game'

export enum CandidateTrait { 
  HUMANITIES = 'CANDIDATE_HUMANITIES',
  SCIENCE = 'CANDIDATE_SCIENCE',
 }

export interface ResponseTraits {
  response: GameResponse
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

export enum UniversityTrait { HUMANITIES = 'UNIVERSITY_HUMANITIES', SCIENCE = 'UNIVERSITY_SCIENCE' }
export enum MajorTrait { HUMANITIES = 'MAJOR_HUMANITIES', SCIENCE = 'MAJOR_SCIENCE' }

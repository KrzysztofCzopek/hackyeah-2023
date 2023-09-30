import { GameResponse } from './Game'

export enum CandidateTrait { C = 'C' }

export interface ResponseTraits {
  response: GameResponse
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

export enum UniversityTrait { A = 'A' }
export enum MajorTrait { B = 'B' }

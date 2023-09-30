import { GameResponse } from './Game'

export enum CandidateTrait { C = 'C' }

interface ResponseTraits {
  response: GameResponse
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

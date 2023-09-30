import { CandidateTrait, MajorTrait, UniversityTrait } from './Trait'

export enum Factor { D = 'D' }

export type FactorTraits = {
  factor: Factor
  traits: {
    trait: CandidateTrait | UniversityTrait | MajorTrait
    points: number
  }[]
}

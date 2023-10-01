import { CandidateTrait, MajorTrait, UniversityTrait } from './Trait'


export enum Factor {
  HUMANITIES = 'FACTOR_HUMANITIES',
  SCIENCE = 'FACTOR_SCIENCE',
  TEST_3 = 'FACTOR_TEST_3',
}

export type FactorTraits = {
  factor: Factor
  traits: {
    trait: CandidateTrait | UniversityTrait | MajorTrait
    points: number
  }[]
}

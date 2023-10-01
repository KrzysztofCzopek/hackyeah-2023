import { Factor, FactorTraits } from '../../domain/Factor'
import { CandidateTrait, MajorTrait, UniversityTrait } from '../../domain/Trait'
import { calculateFactorScores } from './calculateFactorScores'

test("correct factor scores for a single trait type", () => {
  const allFactorTraits: FactorTraits[] = [
    {
      factor: Factor.TEST_1,
      traits: [
        { trait: CandidateTrait.TEST_1, points: 1 },
      ]
    },
    {
      factor: Factor.TEST_2,
      traits: [
        { trait: CandidateTrait.TEST_1, points: 0.25 },
        { trait: CandidateTrait.TEST_2, points: -0.5 },
        { trait: UniversityTrait.A, points: 1 }
      ]
    },
    {
      factor: Factor.TEST_3,
      traits: [
        { trait: MajorTrait.B, points: 1 },
      ]
    }
  ]
  const targetTraits = [
    { trait: CandidateTrait.TEST_1, points: 1 },
    { trait: CandidateTrait.TEST_2, points: -1 },
  ]
  const resultScores = calculateFactorScores(targetTraits, allFactorTraits)
  expect(resultScores.find(it => it.factor === Factor.TEST_1)?.score).toBe(1)
  expect(resultScores.find(it => it.factor === Factor.TEST_2)?.score).toBe(0.75)
  expect(resultScores.find(it => it.factor === Factor.TEST_3)?.score).toBeNull()
})

export {}
import { Factor, FactorTraits } from '../../domain/Factor'
import { CandidateTrait, MajorTrait, UniversityTrait } from '../../domain/Trait'
import { calculateFactorScores } from './calculateFactorScores'

test("correct factor scores for a single trait type", () => {
  const allFactorTraits: FactorTraits[] = [
    {
      factor: Factor.HUMANITIES,
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: 1 },
      ]
    },
    {
      factor: Factor.SCIENCE,
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: -0.25 },
        { trait: CandidateTrait.SCIENCE, points: 1 },
        { trait: UniversityTrait.SCIENCE, points: 1 }
      ]
    },
    {
      factor: Factor.TEST_3,
      traits: [
        { trait: MajorTrait.SCIENCE, points: 1 },
      ]
    }
  ]
  const targetTraits = [
    { trait: CandidateTrait.HUMANITIES, points: 0.25 },
    { trait: CandidateTrait.HUMANITIES, points: 0.75 },
    { trait: CandidateTrait.SCIENCE, points: -1 },
  ]
  const resultScores = calculateFactorScores(targetTraits, allFactorTraits)
  expect(resultScores.find(it => it.factor === Factor.HUMANITIES)?.score).toBe(1)
  expect(resultScores.find(it => it.factor === Factor.SCIENCE)?.score).toBe(-1.25)
  expect(resultScores.find(it => it.factor === Factor.TEST_3)?.score).toBeNull()
})

export {}
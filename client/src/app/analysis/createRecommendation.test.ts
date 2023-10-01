import { Factor, FactorTraits } from '../../domain/Factor'
import { CandidateTrait, MajorTrait, ResponseTraits, UniversityTrait } from '../../domain/Trait'
import { University } from '../../domain/University'
import { GameResult } from '../../domain/Game'
import { createRecommendation } from './createRecommendation'

test("e2e", () => {
  const humanitiesGameResult: GameResult = {
    location: { lat: 10, long: 100 },
    responses: [
      {
        question: 'A',
        answer: 'A1'
      },
      {
        question: 'B',
        answer: 'B3'
      },
      {
        question: 'C',
        answer: 'C1'
      }
    ]
  }
  const scienceGameResult: GameResult = {
    location: { lat: 10, long: 100 },
    responses: [
      {
        question: 'A',
        answer: 'A1'
      },
      {
        question: 'B',
        answer: 'B1'
      },
      {
        question: 'C',
        answer: 'C2'
      }
    ]
  }
  const responsesTraits: ResponseTraits[] = [
    {
      response: { question: 'A', answer: 'A1' },
      traits: [{ trait: CandidateTrait.HUMANITIES, points: 1 }]
    },
    {
      response: { question: 'A', answer: 'A2' },
      traits: [{ trait: CandidateTrait.HUMANITIES, points: 0 }]
    },
    {
      response: { question: 'A', answer: 'A3' },
      traits: [{ trait: CandidateTrait.HUMANITIES, points: -1 }]
    },
    {
      response: { question: 'B', answer: 'B1' },
      traits: [{ trait: CandidateTrait.SCIENCE, points: 1 }]
    },
    {
      response: { question: 'B', answer: 'B2' },
      traits: [{ trait: CandidateTrait.SCIENCE, points: 0 }]
    },
    {
      response: { question: 'B', answer: 'B3' },
      traits: [{ trait: CandidateTrait.SCIENCE, points: -1 }]
    },
    {
      response: { question: 'C', answer: 'C1' },
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: 1 },
        { trait: CandidateTrait.SCIENCE, points: -1 },
      ]
    },
    {
      response: { question: 'C', answer: 'C2' },
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: -1 },
        { trait: CandidateTrait.SCIENCE, points: 1 },
      ]
    },
    {
      response: { question: 'C', answer: 'C3' },
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: 0.5 },
        { trait: CandidateTrait.SCIENCE, points: 0.5 },
      ]
    },
  ]
  const universityAGH = {
    name: "AGH Kraków",
    majors: [
      {
        name: "Inżynieria Mechatroniczna",
        syllabusUrl: "",
        traits: [
          { trait: MajorTrait.HUMANITIES, points: 0.2 },
          { trait: MajorTrait.SCIENCE, points: 0.8 },
        ]
      },
    ],
    location: { lat: 50.0614, long: 19.9366 },
    traits: [
      { trait: UniversityTrait.HUMANITIES, points: 0.1 },
      { trait: UniversityTrait.SCIENCE, points: 0.6 },
    ]
  }
  const universitySGH = {
    name: "SGH Warszawa",
    majors: [
      {
        name: "Rachunkowość",
        syllabusUrl: "",
        traits: [
          { trait: MajorTrait.HUMANITIES, points: 0.5 },
          { trait: MajorTrait.SCIENCE, points: 0.5 },
        ]
      },
    ],
    location: { lat: 52.237049, long: 21.017532 },
    traits: [
      { trait: UniversityTrait.HUMANITIES, points: 0.5 },
      { trait: UniversityTrait.SCIENCE, points: 0.5 },
    ]
  }
  const universityUJ =
  {
    name: "UJ Kraków",
    majors: [
      {
        name: "Psychologia",
        syllabusUrl: "",
        traits: [
          { trait: MajorTrait.HUMANITIES, points: 0.9 },
          { trait: MajorTrait.SCIENCE, points: 0.1 },
        ]
      },
    ],
    location: { lat: 50.0614, long: 19.9366 },
    traits: [
      { trait: UniversityTrait.HUMANITIES, points: 0.6 },
      { trait: UniversityTrait.SCIENCE, points: 0.4 },
    ]
  }
  const factorsTraits: FactorTraits[] = [
    {
      factor: Factor.HUMANITIES,
      traits: [
        { trait: CandidateTrait.HUMANITIES, points: 1 },
        { trait: UniversityTrait.HUMANITIES, points: 1 },
        { trait: MajorTrait.HUMANITIES, points: 1 }
      ]
    },
    {
      factor: Factor.SCIENCE,
      traits: [
        { trait: CandidateTrait.SCIENCE, points: 1 },
        { trait: UniversityTrait.SCIENCE, points: 1 },
        { trait: MajorTrait.SCIENCE, points: 1 }
      ]
    }
  ]

  const humanitiesRecommendation = createRecommendation(
    humanitiesGameResult,
    [universityAGH, universityUJ, universitySGH],
    responsesTraits,
    factorsTraits
  )
  expect(humanitiesRecommendation.topMajors.map(it => it.major.name))
    .toEqual([universityUJ.majors[0].name, universitySGH.majors[0].name, universityAGH.majors[0].name])
  expect(humanitiesRecommendation.topUniversities.map(it => it.university.name))
    .toEqual([universityUJ.name, universitySGH.name, universityAGH.name])

  const scienceRecommendation = createRecommendation(
    scienceGameResult,
    [universityAGH, universityUJ, universitySGH],
    responsesTraits,
    factorsTraits
  )
  expect(scienceRecommendation.topMajors.map(it => it.major.name))
    .toEqual([universityAGH.majors[0].name, universitySGH.majors[0].name, universityUJ.majors[0].name])
  expect(scienceRecommendation.topUniversities.map(it => it.university.name))
    .toEqual([universityAGH.name, universitySGH.name, universityUJ.name])
})

export { }
import { GameResponse, GameResult } from '@/domain/Game'
import { GeoLocation } from '@/domain/Geolocation'
import { CandidateTrait, ResponseTraits } from '@/domain/Trait'

export type CandidateProfile = {
  location: GeoLocation
  traits: {
    trait: CandidateTrait,
    points: number
  }[]
}

export function gameResultToCandidateProfile(
  gameResult: GameResult,
  responsesTraits: ResponseTraits[]
): CandidateProfile {
  return {
    location: gameResult.location,
    traits: gameResult.responses.flatMap((response) => {
      const responseTraits = responsesTraits.find(it => compareResponses(it.response, response))
      return responseTraits?.traits || []
    })
  }
}

function compareResponses(r1: GameResponse, r2: GameResponse): boolean {
  return r1.answer === r2.answer && r1.question === r2.question
}

import { GeoLocation } from './Geolocation'

export type Question = string
export type Answer = string

export type GameResponse = {
  question: Question
  answer: Answer
}

export type GameResult = {
  location: GeoLocation
  responses: GameResponse[]
}

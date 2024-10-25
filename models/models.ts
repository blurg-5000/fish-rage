export interface CryptidData {
  name: string
  size: number
  rage: number
  points: number
  image: string
  description: string
}

export interface Cryptid extends CryptidData {
  id: number
}

export interface ScoreData {
  name: string
  score: number
}

export interface Score extends ScoreData {
  id: number
}

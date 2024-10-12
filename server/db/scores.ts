import db from './connection.ts'
import { Score, ScoreData } from '../../models/models.ts'

export async function getAllScores(): Promise<Score[]> {
  return await db('scores').select()
}

export async function delScoreById(id: number): Promise<void> {
  await db('scores').del().where({ id })
}

export async function addScore(newScore: ScoreData) {
  const [id] = await db('scores').insert(newScore)
  return id
}

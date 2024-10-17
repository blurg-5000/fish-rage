import request from 'superagent'
import { Score, ScoreData } from '../../models/models'

const rootUrl = '/api/v1'

export async function getScores(): Promise<Score[]> {
  const res = await request.get(rootUrl + '/scores')
  return res.body.sort((a: Score, b: Score) => b.score - a.score)
}

export async function addNewScore(idToDelete: number, newScore: ScoreData) {
  await request.delete(rootUrl + '/scores/' + idToDelete)
  await request.post(rootUrl + '/scores').send(newScore)
}

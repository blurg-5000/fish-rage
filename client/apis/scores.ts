import request from 'superagent'
import { Score } from '../../models/models'

const rootUrl = '/api/v1'

export async function getScores(): Promise<Score[]> {
  const res = await request.get(rootUrl + '/scores')
  return res.body.sort((a: Score, b: Score) => b.score - a.score)
}

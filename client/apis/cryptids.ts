import request from 'superagent'
import { Cryptid } from '../../models/models'

const rootUrl = '/api/v1'

export function getCryptids(): Promise<Cryptid> {
  return request.get(rootUrl + '/cryptids').then((res) => {
    const array = [...res.body]
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array[0]
  })
}

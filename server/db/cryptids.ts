import db from './connection.ts'
import { Cryptid, CryptidData } from '../../models/models.ts'

export async function getAllCryptids(): Promise<Cryptid[]> {
  return await db('cryptids').select()
}

export async function delCryptidById(id: number): Promise<void> {
  await db('cryptids').del().where({ id })
}

export async function addCryptid(newCryptid: CryptidData) {
  const [id] = await db('cryptids').insert(newCryptid)
  return id
}

export async function editCryptid(updatedCryptid: Cryptid) {
  const { id } = updatedCryptid
  return await db('cryptids').update(updatedCryptid).where({ id })
}

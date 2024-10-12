import { Router } from 'express'
import * as db from '../db/cryptids.ts'

const router = Router()

router.get('/', async (_req, res) => {
  try {
    const cryptids = await db.getAllCryptids()
    res.json(cryptids)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

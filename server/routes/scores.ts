import { Router } from 'express'

import * as db from '../db/scores.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const scores = await db.getAllScores()

    res.json(scores)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.post('/', async (req, res) => {
  try {
    await db.addScore(req.body)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.delete('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    await db.delScoreById(id)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

export default router

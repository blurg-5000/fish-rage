import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useState } from 'react'

interface Props {
  cryptid: Cryptid
}

export default function Game({ cryptid }: Props) {
  const [score, setScore] = useState(0)
  const [boatHealth, setBoatHealth] = useState(100)
  const [lineHealth, setLineHealth] = useState(100)
  const [catchProgress, setCatchProgress] = useState(100)
  const [minions, setMinions] = useState({
    m1: false,
    m2: false,
    m3: false,
    m4: false,
    m5: false,
    m6: false
  })
  const queryClient = useQueryClient()

  function finishFishing() {
    setScore(score + cryptid.points)
    queryClient.invalidateQueries({queryKey: ['cryptids']})
  }

  function getBeatenUp() {
    setBoatHealth(boatHealth - 10)
  }

  return (
    <>
    <p>Score: {score}</p>
    <p>Boat health: {boatHealth}</p>
  <p>Cryptid: {cryptid.name}</p>
  <button
  onClick={finishFishing}
  >fish</button>
   <button
  onClick={getBeatenUp}
  >get beaten up</button>
    </>
)
}

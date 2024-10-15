import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useCallback, useEffect, useRef, useState } from 'react'
import { randomRange } from '../helperFuncs'
import Minion from './Minion'
import { useNavigate } from 'react-router-dom'

interface Props {
  cryptid: Cryptid
}

export default function Game({ cryptid }: Props) {
  const [score, setScore] = useState(0)
  const [boatHealth, setBoatHealth] = useState(100)
  const [lineHealth, setLineHealth] = useState(100) //todo
  const [catchProgress, setCatchProgress] = useState(0) // todo
  const [minions, setMinions] = useState([
    // keep track of minions for rendering
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const minionsRef = useRef([
    // keep track of minions for the attack interval
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const spawnRate = [1, 2, 3, 4].includes(cryptid.rage) // rage determines the speed at which the minions will spawn
    ? 3
    : [5, 6, 7].includes(cryptid.rage)
      ? 2
      : 1
  const minionDamage = 10
  const damageFrequency = 2000

  // boat loses x damage every 2 seconds
  const getBeatenUp = useCallback(() => {
    setBoatHealth((prevHealth) => prevHealth - minionDamage)
  }, [])

  if (boatHealth === 0) {
    navigate('/scores/0')
  }

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const idle = minions.reduce(
        // finds the indexes of the minions which aren't already in the boat
        (available: number[], minion, i) =>
          minion === false ? [...available, i] : available,
        [],
      )
      if (idle.length > 0) {
        // only do this bit if there are any idle minions
        const idleMinion = idle[randomRange(0, idle.length - 1)] // pick a rando idle minion
        const tempArr = [...minions]
        tempArr[idleMinion] = true // make that minion active
        setMinions(() => tempArr)
      }
    }, spawnRate * 1000)
    return () => clearInterval(spawnInterval)
  }, [minions, spawnRate])

  // boat takes damage if there are any active minions on it. Number of minions doesn't affect damage.
  useEffect(() => {
    const attackInterval = setInterval(() => {
      if (minions.some((val) => val === true)) {
        getBeatenUp()
      }
    }, damageFrequency)
    return () => clearInterval(attackInterval)
  }, [getBeatenUp, minions])

  function finishFishing() {
    // do the toast alert to show details of the cryptid they caught
    setScore((currentScore) => currentScore + cryptid.points)
    queryClient.invalidateQueries({ queryKey: ['cryptids'] }) // get a new cryptid to fish for
  }

  function killMinion(minion: number) {
    // todo: update for useRef
    const tempArr = [...minions]
    tempArr[minion] = false
    setMinions(() => tempArr)
  }

  return (
    <>
      <p>Score: {score}</p>
      <p>Boat health: {boatHealth}</p>
      <p>Cryptid: {cryptid.name}</p>
      <div className="boat">
        {minions.map((minionState, i) => (
          <Minion
            key={`m${i}`}
            alive={minionState}
            minionId={i}
            killMinion={killMinion}
          />
        ))}
      </div>
      <button onClick={finishFishing}>fish</button> {/* temp */}
      <button onClick={getBeatenUp}>get beaten up</button> {/* temp */}
    </>
  )
}

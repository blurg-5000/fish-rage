import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useCallback, useEffect, useState } from 'react'
import {
  randomRange,
  getRandomPositionAroundCenter,
  playAudio,
} from '../helperFuncs'
import Minion from './Minion'
import { useNavigate } from 'react-router-dom'
import HorizontalLifeBar from '../components/HorizontalLifeBar'
import VerticalLifeBar from '../components/VerticalLifeBar'
import Boat from './Boat'
import Modal from './Modal'

interface MinionState {
  alive: boolean
  position: { top: number; left: number }
}

interface Props {
  cryptid: Cryptid
}

export interface LineHealth {
  lineHealth: number
}

export interface CatchProgress {
  catchProgress: number
}

export default function Game({ cryptid }: Props) {
  const [score, setScore] = useState(0)
  const [boatHealth, setBoatHealth] = useState(100)
  const [lineHealth, setLineHealth] = useState<LineHealth>({ lineHealth: 100 })
  const [catchProgress, setCatchProgress] = useState<CatchProgress>({
    catchProgress: 0,
  })
  const [showModal, setShowModal] = useState(false)
  const [minions, setMinions] = useState<MinionState[]>([
    { alive: false, position: { top: 0, left: 0 } },
    { alive: false, position: { top: 0, left: 0 } },
    { alive: false, position: { top: 0, left: 0 } },
    { alive: false, position: { top: 0, left: 0 } },
    { alive: false, position: { top: 0, left: 0 } },
    { alive: false, position: { top: 0, left: 0 } },
  ])

  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const spawnRate = [1, 2, 3, 4].includes(cryptid.rage)
    ? 3
    : [5, 6, 7].includes(cryptid.rage)
      ? 2
      : 1
  const minionDamage = 10
  const damageFrequency = 2000

  // Center position - Could be the center of the screen or near the boat
  const centerPosition = {
    top: window.innerHeight / 2 - 150, // Adjust based on boat position if needed
    left: window.innerWidth / 2 - 75, // Adjust based on boat position if needed
  }

  const getBeatenUp = useCallback(() => {
    setBoatHealth((prevHealth) => prevHealth - minionDamage)
    playAudio('/audio/crab_bite.wav')
  }, [])

  if (boatHealth === 0) {
    navigate('/scores/0')
  }

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      const idle = minions.reduce(
        (available: number[], minion, i) =>
          !minion.alive ? [...available, i] : available,
        [],
      )

      if (idle.length > 0) {
        const idleMinion = idle[randomRange(0, idle.length - 1)]

        // Set initial minion position to be farther from the boat
        const randomPosition = getRandomPositionAroundCenter(
          centerPosition,
          400,
          500,
        )

        const tempArr = [...minions]
        tempArr[idleMinion] = { alive: true, position: randomPosition }

        setMinions(() => tempArr)
      }
    }, spawnRate * 1000)

    return () => clearInterval(spawnInterval)
  }, [minions, spawnRate])

  useEffect(() => {
    const attackInterval = setInterval(() => {
      if (minions.some((val) => val.alive)) {
        getBeatenUp()
      }
    }, damageFrequency)

    return () => clearInterval(attackInterval)
  }, [getBeatenUp, minions])

  function finishFishing() {
    setScore((currentScore) => currentScore + cryptid.points)
    playAudio('audio/monster_growl.mp3')
    setShowModal(true)
  }

  function getNewFish() {
    queryClient.invalidateQueries({ queryKey: ['cryptids'] })
  }

  function killMinion(minionId: number) {
    const tempArr = [...minions]
    tempArr[minionId] = { ...tempArr[minionId], alive: false }
    setMinions(() => tempArr)
  }

  return (
    <section>
      {showModal && (
        <section className="fixed inset-0 z-10 h-full w-full bg-red-600 bg-opacity-50 backdrop-blur-sm">
          <Modal
            cryptid={cryptid}
            showModal={showModal}
            setShowModal={setShowModal}
            getNewFish={getNewFish}
          />
        </section>
      )}
      <p>Score: {score}</p>
      <p>Boat health: {boatHealth}</p>
      <p>Cryptid: {cryptid.name}</p>
      <div className="boat relative">
        {minions.map((minionState, i) =>
          minionState.alive ? (
            <Minion
              key={`m${i}`}
              alive={minionState.alive}
              minionId={i}
              killMinion={killMinion}
              initialPosition={minionState.position}
              targetPosition={centerPosition} // Center of the screen or near the boat
            />
          ) : null,
        )}
      </div>
      <button onClick={finishFishing}>fish</button> {/* temp */}
      <button onClick={getBeatenUp}>get beaten up</button> {/* temp */}
      <div className="flex w-full justify-center"></div>
      <div className="flex flex-row">
        <div className="absolute pl-2">
          <p className="text-center">Line Health</p>
          <VerticalLifeBar color="blue" value={lineHealth} />
        </div>
        <div className="absolute pl-28">
          <p className="text-center">Catch Progress</p>
          <VerticalLifeBar
            color="red"
            value={catchProgress}
            intensity={cryptid.rage}
          />
        </div>
      </div>
      <div className="flex flex-col pl-[30%]">
        <div>
          <Boat decay={boatHealth} />
          <HorizontalLifeBar color="green" value={boatHealth} />
        </div>
      </div>
    </section>
  )
}

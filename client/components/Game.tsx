import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { randomRange, getRandomPositionAroundCenter } from '../helperFuncs'
import Minion from './Minion'
import { useNavigate } from 'react-router-dom'
import HorizontalLifeBar from '../components/HorizontalLifeBar'
import VerticalLifeBar from '../components/VerticalLifeBar'
import Boat from './Boat'
import Modal from './Modal'
import { playAudio } from '../helperFuncs'

interface MinionState {
  alive: boolean
  position: { top: number; left: number }
  exploding: boolean // Add exploding state
}

interface Props {
  cryptid: Cryptid
}

export default function Game({ cryptid }: Props) {
  const [explosion, setExplosion] = useState(false)

  const [score, setScore] = useState(0)
  const [boatHealth, setBoatHealth] = useState(100)
  const [lineHealth, setLineHealth] = useState(100)
  const [catchProgress, setCatchProgress] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const [minions, setMinions] = useState<MinionState[]>(
    Array(6).fill({ alive: false, position: { top: 0, left: 0 } }),
  )

  const queryClient = useQueryClient()
  const navigate = useNavigate()
  const spawnRate = cryptid.rage <= 4 ? 3 : cryptid.rage <= 7 ? 2 : 1
  const minionDamage = 10
  const damageFrequency = 2000

  // Center position - Could be the center of the screen or near the boat
  const centerPosition = useMemo(
    () => ({
      top: window.innerHeight / 2 - 150, // Adjust based on boat position if needed
      left: window.innerWidth / 2 - 75, // Adjust based on boat position if needed
    }),
    [],
  )

  useEffect(() => {
    if (boatHealth === 0) {
      queryClient.setQueryData(['basket'], [])
      navigate('/scores/died')
    }
  }, [boatHealth, navigate, queryClient])

  useEffect(() => {
    if (lineHealth <= 0) {
      navigate(`/scores/${score}`)
    }
  }, [lineHealth, navigate, score])

  const getBeatenUp = useCallback(() => {
    setBoatHealth((prevHealth) => prevHealth - minionDamage)
    playAudio('/audio/crab_bite.wav')
  }, [])

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
        tempArr[idleMinion] = {
          alive: true,
          position: randomPosition,
          exploding: false,
        }

        setMinions(() => tempArr)
      }
    }, spawnRate * 1000)

    return () => clearInterval(spawnInterval)
  }, [minions, spawnRate, centerPosition])

  useEffect(() => {
    const attackInterval = setInterval(() => {
      if (minions.some((val) => val.alive)) {
        getBeatenUp()
      }
    }, damageFrequency)

    return () => clearInterval(attackInterval)
  }, [getBeatenUp, minions])

  const finishFishing = useCallback(() => {
    const currentBasket = queryClient.getQueryData(['basket']) as string[]
    queryClient.setQueryData(['basket'], [...currentBasket, cryptid.name])

    setScore((prevScore) => prevScore + cryptid.points) // Use functional update to ensure correct score
    playAudio('audio/monster_growl.mp3')
    setShowModal(true)
  }, [cryptid, queryClient])

  const handleKeyDown = useCallback(() => {
    setCatchProgress((prevProgress) => {
      if (prevProgress + 10 >= 100) {
        finishFishing()
        return 0 // Reset progress after fishing finishes
      }
      return prevProgress + 10
    })

    setLineHealth((prevHealth) => prevHealth - randomRange(0, spawnRate))
  }, [finishFishing, spawnRate])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  function getNewFish() {
    setCatchProgress(0)
    queryClient.invalidateQueries({ queryKey: ['cryptids'] })
  }
  function killMinion(minionId: number) {
    setMinions((prevMinions) => {
      const newMinions = [...prevMinions]
      newMinions[minionId] = {
        ...newMinions[minionId],
        alive: false,
        exploding: true,
      }

      return newMinions
    })

    setTimeout(() => {
      setMinions((prevMinions) => {
        const newMinions = [...prevMinions]
        newMinions[minionId] = {
          ...newMinions[minionId],
          exploding: false,
        }

        return newMinions
      })
    }, 500)

    playAudio('audio/explosion.mp3')
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
      <div className="boat relative">
        {minions.map(
          (minionState, i) =>
            minionState.alive || minionState.exploding ? ( // Render while alive or exploding
              <Minion
                key={`m${i}`}
                alive={minionState.alive}
                explosion={explosion}
                exploding={minionState.exploding} // Use this to control the explosion display
                setExplosion={setExplosion}
                minionId={i}
                killMinion={killMinion}
                initialPosition={minionState.position}
                targetPosition={centerPosition}
              />
            ) : null, // Remove only when not alive and not exploding
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

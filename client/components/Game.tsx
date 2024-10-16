import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useState } from 'react'
import HorizontalLifeBar from '../components/HorizontalLifeBar'
import VerticalLifeBar from '../components/VerticalLifeBar'
import Boat from './Boat'

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
    m6: false,
  })
  const queryClient = useQueryClient()

  function finishFishing() {
    setScore(score + cryptid.points)
    queryClient.invalidateQueries({ queryKey: ['cryptids'] })
  }

  function getBeatenUp() {
    setBoatHealth(boatHealth - 10)
  }

  return (
    <>
      <section className="m-8">
        <p className="text-white">Score: {score}</p>
        <p className="text-white">Boat health: {boatHealth}</p>
        <p className="text-white">Cryptid: {cryptid.name}</p>
        <button className="p-2 text-white" onClick={finishFishing}>
          fish
        </button>
        <button className="text-white" onClick={getBeatenUp}>
          get beaten up
        </button>
        <div className="flex w-full justify-center"></div>
        <div className="flex">
          <div className="absolute pl-2">
            {/* LineHealth */}
            <p className="text-center text-white">Line Health</p>
            <VerticalLifeBar color="blue" value={lineHealth} />
          </div>
          <div className="absolute pl-28">
            {/* CatchProgress */}
            <p className="text-center text-white">Catch Progress</p>
            <VerticalLifeBar color="red" value={catchProgress} />
          </div>
        </div>
        {/* Boat Health */}
        <div className="flex flex-col pl-[30%]">
          {/* BOAT svg's */}
          <div className="">
            <div>
              <Boat decay={boatHealth} />
            </div>
            <HorizontalLifeBar color="green" value={boatHealth} />
          </div>
        </div>
      </section>
    </>
  )
}

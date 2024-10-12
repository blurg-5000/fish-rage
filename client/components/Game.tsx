import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { useCallback, useEffect, useState } from 'react'
import { randomRange} from '../helperFuncs'
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
  const [minions, setMinions] = useState([false, false, false, false, false, false])
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const spawnRate = [1, 2, 3, 4].includes(cryptid.rage) 
    ? 3
    : [5, 6, 7].includes(cryptid.rage) 
      ? 2
      : 1

  const getBeatenUp = useCallback(() =>{
    setBoatHealth((prevHealth) => prevHealth - 10)
  }, [])

if (boatHealth === 0) {
  navigate('/scores')
}

useEffect(() => {
  const spawnInterval = setInterval(()=> {
    const idle = minions.reduce((a: number[], c, i) => c === false ? [...a, i] : a , [])
    const readyMinion = idle[randomRange(0, idle.length-1)]
    const tempArr = [...minions]
    tempArr[readyMinion] = true
    setMinions(() => tempArr)
  }, spawnRate * 1000)
  return () => clearInterval(spawnInterval)
}, [minions, spawnRate])

  useEffect(() => {
    const attackInterval = setInterval(()=> {
      if (minions.some(val => val === true)) {
        getBeatenUp()
      }
    }, 2000)
    return () => clearInterval(attackInterval)
  }, [getBeatenUp, minions])

  function finishFishing() {
    // do the toast alert
    setScore(score + cryptid.points)
    queryClient.invalidateQueries({queryKey: ['cryptids']})
  }



  function killMinion (minion: number) {
    const tempArr = [...minions]
    tempArr[minion] = false
    setMinions(() => tempArr)
  }

  return (
    <>
    <p>Score: {score}</p>
    <p>Boat health: {boatHealth}</p>
  <p>Cryptid: {cryptid.name}</p>
  <div className='boat'>
    {minions.map((minionState, i) => <Minion key={`m${i}`} alive={minionState} minionId={i} killMinion={killMinion}/>)}
  </div>
  <button
  onClick={finishFishing}
  >fish</button>
   <button
  onClick={getBeatenUp}
  >get beaten up</button>
    </>
)
}

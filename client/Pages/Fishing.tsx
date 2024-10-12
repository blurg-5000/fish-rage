import { useQuery } from '@tanstack/react-query'
import { getCryptids } from '../apis/cryptids'
import Game from '../components/Game'

import HorizontalLifeBar from '../components/HorizontalLifeBar'
import VerticalLifeBar from '../components/VerticalLifeBar'
export default function Fishing() {
  return (
    <div className="w-full">
      <h1>Fishing Page</h1>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <p className="text-center">Fishing Line</p>
          <VerticalLifeBar color="blue" value={75} />
        </div>
        <div className="flex flex-col">
          <p className="text-center">Cryptid/ Fish</p>
          <VerticalLifeBar color="red" value={50} />
        </div>
      </div>
      <HorizontalLifeBar color="green" value={75} />
    </div>
  )
}

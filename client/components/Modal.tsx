import { useQueryClient } from '@tanstack/react-query'
import { Cryptid } from '../../models/models'
import { get } from 'superagent'

interface Props {
  cryptid: Cryptid
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  getNewFish: () => void
}

export default function Modal({
  cryptid,
  showModal,
  setShowModal,
  getNewFish,
}: Props) {
  function closeModal() {
    setShowModal(false)
    getNewFish()
  }

  return (
    showModal && (
      <section className="relative m-10 flex flex-col items-center justify-center rounded-sm border-2 border-solid border-black p-6">
        <button
          className="absolute right-2 top-2 border-solid border-black bg-black p-2 text-white"
          aria-label="close"
          onClick={closeModal}
        >
          x
        </button>
        <h1>You caught: {cryptid.name}!</h1>
        <img
          src={`./cryptid-images/${cryptid.image}`}
          className="max-h-screen-md h-auto w-auto max-w-screen-md object-contain"
          alt={cryptid.name}
        />
        <p>You've earned {cryptid.points} points</p>
      </section>
    )
  )
}

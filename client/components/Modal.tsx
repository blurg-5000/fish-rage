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
      <section className="flex flex-col items-center justify-center rounded-sm border-2 border-solid border-black">
        <button
          className="rounded-lg  border-2 border-solid border-black p-2"
          aria-label="close"
          onClick={closeModal}
        >
          x
        </button>
        <h1>You caught: {cryptid.name}!</h1>
        <img src={`${cryptid.image}`} alt={cryptid.name} />
        <p>You've earned {cryptid.points} points</p>
      </section>
    )
  )
}
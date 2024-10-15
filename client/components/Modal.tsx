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
      <section>
        <button aria-label="close" onClick={closeModal}>
          x
        </button>
        <h1>You caught: {cryptid.name}!</h1>
        <img src={`${cryptid.image}`} alt={cryptid.name} />
        <p>You've earned {cryptid.points} points</p>
      </section>
    )
  )
}

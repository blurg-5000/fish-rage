import { Cryptid } from '../../models/models'

interface Props {
  cryptid: Cryptid
  showModal: boolean
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ cryptid, showModal, setShowModal }: Props) {
  function closeModal() {
    setShowModal(false)
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

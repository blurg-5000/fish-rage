import { useEffect, useState } from 'react'

interface Props {
  alive: boolean
  minionId: number
  initialPosition: { top: number; left: number }
  targetPosition: { top: number; left: number }
  killMinion: (id: number) => void
}

export default function Minion({
  alive,
  minionId,
  initialPosition,
  targetPosition,
  killMinion,
}: Props) {
  const [position, setPosition] = useState(initialPosition)

  useEffect(() => {
    if (alive) {
      // Start moving towards the target position after the minion spawns
      const timeout = setTimeout(() => {
        setPosition(targetPosition)
      }, 100) // Delay before the movement starts, adjust if needed

      return () => clearTimeout(timeout)
    }
  }, [alive, targetPosition])

  if (alive) {
    return (
      <button
        onClick={() => killMinion(minionId)}
        className="absolute h-10 w-10 rounded-full bg-red-600 transition-all duration-[5s]" // This uses Tailwind for smooth animation
        style={{ top: `${position.top}px`, left: `${position.left}px` }}
      >
        M{`${minionId + 1}`}
      </button>
    )
  }
  return null
}

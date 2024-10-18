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
  const [size, setSize] = useState(0.5) // Initial size (small)

  // Function to interpolate between the initial size and target size based on distance traveled
  const calculateSize = (currentPos: { top: number; left: number }) => {
    const distanceFromCenter = Math.sqrt(
      Math.pow(targetPosition.top - currentPos.top, 2) +
        Math.pow(targetPosition.left - currentPos.left, 2),
    )
    const totalDistance = Math.sqrt(
      Math.pow(targetPosition.top - initialPosition.top, 2) +
        Math.pow(targetPosition.left - initialPosition.left, 2),
    )

    const progress = 2 - distanceFromCenter / totalDistance // Progress increases as it gets closer

    const sizeFactor = 0.5 + progress * 1 // Size grows from 0.5 to 1.5
    return sizeFactor
  }

  useEffect(() => {
    const animationDuration = 5000 // 5 seconds to reach the boat (you can adjust)
    const start = performance.now()

    const moveMinion = (timestamp: number) => {
      const elapsed = timestamp - start
      const progress = Math.min(elapsed / animationDuration, 1)

      // Interpolate position
      const newTop =
        initialPosition.top +
        progress * (targetPosition.top - initialPosition.top)
      const newLeft =
        initialPosition.left +
        progress * (targetPosition.left - initialPosition.left)

      // Update position and size
      setPosition({ top: newTop, left: newLeft })
      setSize(calculateSize({ top: newTop, left: newLeft }))

      // Continue animation if not done
      if (progress < 1) {
        requestAnimationFrame(moveMinion)
      }
    }

    requestAnimationFrame(moveMinion)
  }, [])

  if (alive)
    return (
      <button
        onClick={() => killMinion(minionId)}
        className="absolute h-10 w-10 rounded-full bg-red-600 transition-all duration-[5s]" // This uses Tailwind for smooth animation
        style={{
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: `scale(${size})`, // Grow the size based on distance
          transition: 'transform 0.1s linear', // Smooth scaling animation
        }}
      >
        M{`${minionId + 1}`}
      </button>
    )
}

import { useEffect, useState } from 'react'

interface Props {
  alive: boolean
  explosion: boolean
  exploding: boolean
  minionId: number
  initialPosition: { top: number; left: number }
  targetPosition: { top: number; left: number }
  setExplosion: React.Dispatch<React.SetStateAction<boolean>>
  killMinion: (id: number) => void
}

export default function Minion({
  alive,
  minionId,
  initialPosition,
  exploding,
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

    const sizeFactor = 0.1 + progress * 1 // Size grows from 0.5 to 1.5
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

  function handleClick(minionId: number) {
    killMinion(minionId) // Kill the minion first (exploding set to true)
  }

  if (alive || exploding)
    return (
      <button
        onClick={() => handleClick(minionId)}
        className="absolute animate-wiggle rounded-full transition-all duration-[5s]"
        style={{
          position: 'absolute',
          height: `${size * 5}rem`,
          width: `${size * 5}rem`,
          top: `${position.top}px`,
          left: `${position.left}px`,
          transition: 'transform 0.1s linear',
          backgroundImage: exploding
            ? 'url("explosion.gif")'
            : 'url("/sprites/crab_sprite.png")',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></button>
    )
}

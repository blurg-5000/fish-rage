import { useEffect, useRef, useState } from 'react'

interface Props {
  color: string
  value: number
  intensity?: number
}

export default function VerticalLifeBar({ color, value, intensity }: Props) {
  const [sprite, setSprite] = useState(false)
  const [rage, setRage] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // TODO : If value is Catch progress, insert the cryptid Sprite, and logic to attach sprite to the progress level.
  const val = value

  useEffect(() => {
    if (color === 'red') {
      setSprite(true)
      if (intensity)
        if (intensity >= 7 && intensity <= 10) {
          setRage('high')
        } else if (intensity >= 4 && intensity <= 6) {
          setRage('medium')
        } else if (intensity >= 1 && intensity <= 3) {
          setRage('low')
        }
    } else {
      setSprite(false)
    }
  }, [value, intensity])

  // Manage audio playback
  useEffect(() => {
    if (rage === 'high') {
      // Create and play audio if it doesn't already exist
      if (!audioRef.current) {
        audioRef.current = new Audio('audio/boss_music.mp3')
      }
      audioRef.current.play()
    } else {
      // Stop the audio if rage is not high
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0 // Reset playback position
      }
    }

    // Clean up audio on component unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    }
  }, [rage]) // Add rage to dependency array

  const animationClass =
    rage === 'high'
      ? 'animate-wriggleAggressive'
      : rage === 'medium'
        ? 'animate-wriggleMedium'
        : 'animate-wriggleMild'

  const fullHeight = 98
  const max = 100
  const whiteValue = 100 - val
  const percent = whiteValue / max
  // Dynamic value gets put into the dynamic svg - rect
  const dynamicValue = Math.floor(percent * fullHeight)
  // position of the cryptid sprite, for catch progress bar
  const imagePosition = val - 10

  return (
    <>
      <div>
        {/* // PORTRAIT LEFT LIFE BAR SVG */}
        <div className="z-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 25 100"
            shapeRendering="crispEdges"
            width={80}
          >
            <metadata>
              Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
            </metadata>
            {/* REctangles here: */}
            {/* This is the coloured background - it looks like this changes but it's actually the white rectangle in front of it that grows and shrinks dynamically!  */}
            <rect fill={color} x={3} y={0.5} width={19} height={98} />
            {/* The height of this rect will change dynamically depending on the player's life */}
            <rect
              fill="#ffffff"
              x={3}
              y={0.5}
              width={19}
              // Dynamic Value: 0-100
              height={dynamicValue}
            />
            <path
              stroke="#ffffff"
              d="M3 0h19M2 1h2M21 1h2M1 2h23M1 3h1M3 3h3M19 3h3M23 3h1M1 4h1M3 4h2M20 4h2M23 4h1M1 5h1M3 5h1M21 5h1M23 5h1M1 6h1M3 6h1M21 6h1M23 6h1M1 7h1M3 7h1M21 7h1M23 7h1M1 8h1M3 8h1M21 8h1M23 8h1M1 9h1M3 9h1M21 9h1M23 9h1M1 10h1M3 10h1M21 10h1M23 10h1M1 11h1M3 11h1M21 11h1M23 11h1M1 12h1M3 12h1M21 12h1M23 12h1M1 13h1M3 13h1M21 13h1M23 13h1M1 14h1M3 14h1M21 14h1M23 14h1M1 15h1M3 15h1M21 15h1M23 15h1M1 16h1M3 16h1M21 16h1M23 16h1M1 17h1M3 17h1M21 17h1M23 17h1M1 18h1M3 18h1M21 18h1M23 18h1M1 19h1M3 19h1M21 19h1M23 19h1M1 20h1M3 20h1M21 20h1M23 20h1M1 21h1M3 21h1M21 21h1M23 21h1M1 22h1M3 22h1M21 22h1M23 22h1M1 23h1M3 23h1M21 23h1M23 23h1M1 24h1M3 24h1M21 24h1M23 24h1M1 25h1M3 25h1M21 25h1M23 25h1M1 26h1M3 26h1M21 26h1M23 26h1M1 27h1M3 27h1M21 27h1M23 27h1M1 28h1M3 28h1M21 28h1M23 28h1M1 29h1M3 29h1M21 29h1M23 29h1M1 30h1M3 30h1M21 30h1M23 30h1M1 31h1M3 31h1M21 31h1M23 31h1M1 32h1M3 32h1M21 32h1M23 32h1M1 33h1M3 33h1M21 33h1M23 33h1M1 34h1M3 34h1M21 34h1M23 34h1M1 35h1M3 35h1M21 35h1M23 35h1M1 36h1M3 36h1M21 36h1M23 36h1M1 37h1M3 37h1M21 37h1M23 37h1M1 38h1M3 38h1M21 38h1M23 38h1M1 39h1M3 39h1M21 39h1M23 39h1M1 40h1M3 40h1M21 40h1M23 40h1M1 41h1M3 41h1M21 41h1M23 41h1M1 42h1M3 42h1M21 42h1M23 42h1M1 43h1M3 43h1M21 43h1M23 43h1M1 44h1M3 44h1M21 44h1M23 44h1M1 45h1M3 45h1M21 45h1M23 45h1M1 46h1M3 46h1M21 46h1M23 46h1M1 47h1M3 47h1M21 47h1M23 47h1M1 48h1M3 48h1M21 48h1M23 48h1M1 49h1M3 49h1M21 49h1M23 49h1M1 50h1M3 50h1M21 50h1M23 50h1M1 51h1M3 51h1M21 51h1M23 51h1M1 52h1M3 52h1M21 52h1M23 52h1M1 53h1M3 53h1M21 53h1M23 53h1M1 54h1M3 54h1M21 54h1M23 54h1M1 55h1M3 55h1M21 55h1M23 55h1M1 56h1M3 56h1M21 56h1M23 56h1M1 57h1M3 57h1M21 57h1M23 57h1M1 58h1M3 58h1M21 58h1M23 58h1M1 59h1M3 59h1M21 59h1M23 59h1M1 60h1M3 60h1M21 60h1M23 60h1M1 61h1M3 61h1M21 61h1M23 61h1M1 62h1M3 62h1M21 62h1M23 62h1M1 63h1M3 63h1M21 63h1M23 63h1M1 64h1M3 64h1M21 64h1M23 64h1M1 65h1M3 65h1M21 65h1M23 65h1M1 66h1M3 66h1M21 66h1M23 66h1M1 67h1M3 67h1M21 67h1M23 67h1M1 68h1M3 68h1M21 68h1M23 68h1M1 69h1M3 69h1M21 69h1M23 69h1M1 70h1M3 70h1M21 70h1M23 70h1M1 71h1M3 71h1M21 71h1M23 71h1M1 72h1M3 72h1M21 72h1M23 72h1M1 73h1M3 73h1M21 73h1M23 73h1M1 74h1M3 74h1M21 74h1M23 74h1M1 75h1M3 75h1M21 75h1M23 75h1M1 76h1M3 76h1M21 76h1M23 76h1M1 77h1M3 77h1M21 77h1M23 77h1M1 78h1M3 78h1M21 78h1M23 78h1M1 79h1M3 79h1M21 79h1M23 79h1M1 80h1M3 80h1M21 80h1M23 80h1M1 81h1M3 81h1M21 81h1M23 81h1M1 82h1M3 82h1M21 82h1M23 82h1M1 83h1M3 83h1M21 83h1M23 83h1M1 84h1M3 84h1M21 84h1M23 84h1M1 85h1M3 85h1M21 85h1M23 85h1M1 86h1M3 86h1M21 86h1M23 86h1M1 87h1M3 87h1M21 87h1M23 87h1M1 88h1M3 88h1M21 88h1M23 88h1M1 89h1M3 89h1M21 89h1M23 89h1M1 90h1M3 90h1M21 90h1M23 90h1M1 91h1M3 91h1M21 91h1M23 91h1M1 92h1M3 92h1M21 92h1M23 92h1M1 93h1M3 93h1M21 93h1M23 93h1M1 94h1M3 94h1M21 94h1M23 94h1M1 95h1M3 95h2M20 95h2M23 95h1M1 96h1M3 96h3M19 96h3M23 96h1M1 97h23M2 98h2M21 98h2M4 99h17"
            />
            <path
              stroke="#ed1c24"
              d="M4 1h17M2 3h1M22 3h1M2 4h1M22 4h1M2 5h1M22 5h1M2 6h1M22 6h1M2 7h1M22 7h1M2 8h1M22 8h1M2 9h1M22 9h1M2 10h1M22 10h1M2 11h1M22 11h1M2 12h1M22 12h1M2 13h1M22 13h1M2 14h1M22 14h1M2 15h1M22 15h1M2 16h1M22 16h1M2 17h1M22 17h1M2 18h1M22 18h1M2 19h1M22 19h1M2 20h1M22 20h1M2 21h1M22 21h1M2 22h1M22 22h1M2 23h1M22 23h1M2 24h1M22 24h1M2 25h1M22 25h1M2 26h1M22 26h1M2 27h1M22 27h1M2 28h1M22 28h1M2 29h1M22 29h1M2 30h1M22 30h1M2 31h1M22 31h1M2 32h1M22 32h1M2 33h1M22 33h1M2 34h1M22 34h1M2 35h1M22 35h1M2 36h1M22 36h1M2 37h1M22 37h1M2 38h1M22 38h1M2 39h1M22 39h1M2 40h1M22 40h1M2 41h1M22 41h1M2 42h1M22 42h1M2 43h1M22 43h1M2 44h1M22 44h1M2 45h1M22 45h1M2 46h1M22 46h1M2 47h1M22 47h1M2 48h1M22 48h1M2 49h1M22 49h1M2 50h1M22 50h1M2 51h1M22 51h1M2 52h1M22 52h1M2 53h1M22 53h1M2 54h1M22 54h1M2 55h1M22 55h1M2 56h1M22 56h1M2 57h1M22 57h1M2 58h1M22 58h1M2 59h1M22 59h1M2 60h1M22 60h1M2 61h1M22 61h1M2 62h1M22 62h1M2 63h1M22 63h1M2 64h1M22 64h1M2 65h1M22 65h1M2 66h1M22 66h1M2 67h1M22 67h1M2 68h1M22 68h1M2 69h1M22 69h1M2 70h1M22 70h1M2 71h1M22 71h1M2 72h1M22 72h1M2 73h1M22 73h1M2 74h1M22 74h1M2 75h1M22 75h1M2 76h1M22 76h1M2 77h1M22 77h1M2 78h1M22 78h1M2 79h1M22 79h1M2 80h1M22 80h1M2 81h1M22 81h1M2 82h1M22 82h1M2 83h1M22 83h1M2 84h1M22 84h1M2 85h1M22 85h1M2 86h1M22 86h1M2 87h1M22 87h1M2 88h1M22 88h1M2 89h1M22 89h1M2 90h1M22 90h1M2 91h1M22 91h1M2 92h1M22 92h1M2 93h1M22 93h1M2 94h1M22 94h1M2 95h1M22 95h1M2 96h1M22 96h1M4 98h17"
            />
          </svg>
        </div>
        {sprite && (
          <img
            src="/sprites/cryptid_sprite.png"
            alt="Sprite"
            className={`${animationClass}`}
            style={{
              position: 'absolute',
              left: '53%',
              width: '70px',
              color: 'black',
              bottom: `${imagePosition}%`,
              transform: 'translateX(7%)',
            }}
          />
        )}
      </div>
    </>
  )
}

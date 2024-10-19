import { useEffect, useState } from 'react'
import { CatchProgress, LineHealth } from './Game'

interface Props {
  color: string
  value: LineHealth | CatchProgress
  intensity?: number
}

export default function VerticalLifeBar({ color, value, intensity }: Props) {
  const [sprite, setSprite] = useState(false)
  const [rage, setRage] = useState<string | null>(null)

  console.log('intensity', intensity)

  // TODO : If value is Catch progress, insert the cryptid Sprite, and logic to attach sprite to the progress level.
  let val: number

  if ('lineHealth' in value) {
    val = value.lineHealth
  } else {
    val = value.catchProgress
  }

  useEffect(() => {
    if ('catchProgress' in value) {
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
  }, [value])

  const animationClass =
    rage === 'high'
      ? 'animate-wriggleAggressive'
      : rage === 'medium'
        ? 'animate-wriggleMedium'
        : 'animate-wriggleMild'

  console.log(animationClass)
  const fullHeight = 98
  const max = 100
  const whiteValue = 100 - val
  const percent = whiteValue / max
  // Dynamic value gets put into the dynamic svg - rect
  const dynamicValue = Math.floor(percent * fullHeight)

  // position of the cryptid sprite, for catch progress bar
  const imagePosition = dynamicValue - 5

  console.log(rage)

  if ('catchProgress' in value) console.log(dynamicValue)
  return (
    <>
      <div>
        {/* // PORTRAIT LEFT LIFE BAR SVG */}
        <div className="z-2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 25 100"
            width={80}
            shapeRendering="crispEdges"
          >
            <metadata>
              Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
            </metadata>
            <path
              stroke="#FFFFFF"
              d="M2 0h21M2 1h1M22 1h1M2 2h1M22 2h1M2 3h1M22 3h1M2 4h1M22 4h1M2 5h1M22 5h1M2 6h1M22 6h1M2 7h1M22 7h1M2 8h1M22 8h1M2 9h1M22 9h1M2 10h1M22 10h1M2 11h1M22 11h1M2 12h1M22 12h1M2 13h1M22 13h1M2 14h1M22 14h1M2 15h1M22 15h1M2 16h1M22 16h1M2 17h1M22 17h1M2 18h1M22 18h1M2 19h1M22 19h1M2 20h1M22 20h1M2 21h1M22 21h1M2 22h1M22 22h1M2 23h1M22 23h1M2 24h1M22 24h1M2 25h1M22 25h1M2 26h1M22 26h1M2 27h1M22 27h1M2 28h1M22 28h1M2 29h1M22 29h1M2 30h1M22 30h1M2 31h1M22 31h1M2 32h1M22 32h1M2 33h1M22 33h1M2 34h1M22 34h1M2 35h1M22 35h1M2 36h1M22 36h1M2 37h1M22 37h1M2 38h1M22 38h1M2 39h1M22 39h1M2 40h1M22 40h1M2 41h1M22 41h1M2 42h1M22 42h1M2 43h1M22 43h1M2 44h1M22 44h1M2 45h1M22 45h1M2 46h1M22 46h1M2 47h1M22 47h1M2 48h1M22 48h1M2 49h1M22 49h1M2 50h1M22 50h1M2 51h1M22 51h1M2 52h1M22 52h1M2 53h1M22 53h1M2 54h1M22 54h1M2 55h1M22 55h1M2 56h1M22 56h1M2 57h1M22 57h1M2 58h1M22 58h1M2 59h1M22 59h1M2 60h1M22 60h1M2 61h1M22 61h1M2 62h1M22 62h1M2 63h1M22 63h1M2 64h1M22 64h1M2 65h1M22 65h1M2 66h1M22 66h1M2 67h1M22 67h1M2 68h1M22 68h1M2 69h1M22 69h1M2 70h1M22 70h1M2 71h1M22 71h1M2 72h1M22 72h1M2 73h1M22 73h1M2 74h1M22 74h1M2 75h1M22 75h1M2 76h1M22 76h1M2 77h1M22 77h1M2 78h1M22 78h1M2 79h1M22 79h1M2 80h1M22 80h1M2 81h1M22 81h1M2 82h1M22 82h1M2 83h1M22 83h1M2 84h1M22 84h1M2 85h1M22 85h1M2 86h1M22 86h1M2 87h1M22 87h1M2 88h1M22 88h1M2 89h1M22 89h1M2 90h1M22 90h1M2 91h1M22 91h1M2 92h1M22 92h1M2 93h1M22 93h1M2 94h1M22 94h1M2 95h1M22 95h1M2 96h1M22 96h1M2 97h1M22 97h1M2 98h1M22 98h1M2 99h21"
            />
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
              bottom: `${imagePosition}px`,
              transform: 'translateX(7%)',
            }}
          />
        )}
      </div>
    </>
  )
}

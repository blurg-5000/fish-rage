interface Props {
  color: string
  value: number
}

export default function HorizontalLifeBar({ color, value }: Props) {
  const fullWidth = 96
  const max = 100
  // const whiteValue = 100 - value
  const percent = value / max
  // Dynamic value gets put into the dynamic svg - rect
  const dynamicValue = Math.floor(percent * fullWidth)

  return (
    <>
      {/* LANDSCAPE LIFE BAR SVG */}
      <div className="absolute bottom-0 right-0 p-4 ">
        <p className="text-white">Boat Health Bar</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 100 25"
          shapeRendering="crispEdges"
          width={350}
        >
          <metadata>
            Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
          </metadata>
          {/* This rectangle has Dynamic Value passed in */}
          <rect fill={color} x={2} y={2.5} width={dynamicValue} height={19} />
          <path
            stroke="#ffffff"
            d="M2 1h96M1 2h2M97 2h2M0 3h100M0 4h1M2 4h3M95 4h3M99 4h1M0 5h1M2 5h2M96 5h2M99 5h1M0 6h1M2 6h1M97 6h1M99 6h1M0 7h1M2 7h1M97 7h1M99 7h1M0 8h1M2 8h1M97 8h1M99 8h1M0 9h1M2 9h1M97 9h1M99 9h1M0 10h1M2 10h1M97 10h1M99 10h1M0 11h1M2 11h1M97 11h1M99 11h1M0 12h1M2 12h1M97 12h1M99 12h1M0 13h1M2 13h1M97 13h1M99 13h1M0 14h1M2 14h1M97 14h1M99 14h1M0 15h1M2 15h1M97 15h1M99 15h1M0 16h1M2 16h1M97 16h1M99 16h1M0 17h1M2 17h1M97 17h1M99 17h1M0 18h1M2 18h1M97 18h1M99 18h1M0 19h1M2 19h2M96 19h2M99 19h1M0 20h1M2 20h3M95 20h3M99 20h1M0 21h100M1 22h2M97 22h2M2 23h96"
          />
          <path
            stroke="#ed1c24"
            d="M3 2h94M1 4h1M98 4h1M1 5h1M98 5h1M1 6h1M98 6h1M1 7h1M98 7h1M1 8h1M98 8h1M1 9h1M98 9h1M1 10h1M98 10h1M1 11h1M98 11h1M1 12h1M98 12h1M1 13h1M98 13h1M1 14h1M98 14h1M1 15h1M98 15h1M1 16h1M98 16h1M1 17h1M98 17h1M1 18h1M98 18h1M1 19h1M98 19h1M1 20h1M98 20h1M3 22h94"
          />
        </svg>
      </div>
    </>
  )
}

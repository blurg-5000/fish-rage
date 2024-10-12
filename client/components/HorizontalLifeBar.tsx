interface Props {
  color: string
  value: number
}

export default function HorizontalLifeBar({ color, value }: Props) {
  const fullWidth = 96
  const max = 100
  const whiteValue = 100 - value
  const percent = whiteValue / max
  // Dynamic value gets put into the dynamic svg - rect
  const dynamicValue = Math.floor(percent * fullWidth)
  return (
    <>
      {/* LANDSCAPE LIFE BAR SVG */}
      <div className="p-4">
        <p>Boat Health Bar</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 -0.5 100 25"
          shapeRendering="crispEdges"
          width={350}
        >
          <metadata>
            Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
          </metadata>
          <path
            stroke="#000000"
            d="M1 2h98M1 3h1M98 3h1M1 4h1M98 4h1M1 5h1M98 5h1M1 6h1M98 6h1M1 7h1M98 7h1M1 8h1M98 8h1M1 9h1M98 9h1M1 10h1M98 10h1M1 11h1M98 11h1M1 12h1M98 12h1M1 13h1M98 13h1M1 14h1M98 14h1M1 15h1M98 15h1M1 16h1M98 16h1M1 17h1M98 17h1M1 18h1M98 18h1M1 19h1M98 19h1M1 20h1M98 20h1M1 21h1M98 21h1M1 22h98"
          />
          {/* This rectangle has Dynamic Value passed in */}
          <rect fill={color} x={2} y={2.5} width={dynamicValue} height={19} />
        </svg>
      </div>
    </>
  )
}

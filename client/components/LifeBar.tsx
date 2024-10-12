export default function LifeBar() {
  return (
    <>
      <div className="p-40">
        {/* // PORTRAIT LEFT LIFE BAR SVG */}
        <div className="z-1 absolute border border-black">
          <p className="text-left">Fishing Line</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 100 100"
            width={200}
            shapeRendering="crispEdges"
          >
            <metadata>
              Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
            </metadata>
            <path
              stroke="#000000"
              d="M28 4h17M28 5h1M44 5h1M28 6h1M44 6h1M28 7h1M44 7h1M28 8h1M44 8h1M28 9h1M44 9h1M28 10h1M44 10h1M28 11h1M44 11h1M28 12h1M44 12h1M28 13h1M44 13h1M28 14h1M44 14h1M28 15h1M44 15h1M28 16h1M44 16h1M28 17h1M44 17h1M28 18h1M44 18h1M28 19h1M44 19h1M28 20h1M44 20h1M28 21h1M44 21h1M28 22h1M44 22h1M28 23h1M44 23h1M28 24h1M44 24h1M28 25h1M44 25h1M28 26h1M44 26h1M28 27h1M44 27h1M28 28h1M44 28h1M28 29h1M44 29h1M28 30h1M44 30h1M28 31h1M44 31h1M28 32h1M44 32h1M28 33h1M44 33h1M28 34h1M44 34h1M28 35h1M44 35h1M28 36h1M44 36h1M28 37h1M44 37h1M28 38h1M44 38h1M28 39h1M44 39h1M28 40h1M44 40h1M28 41h1M44 41h1M28 42h1M44 42h1M28 43h1M44 43h1M28 44h1M44 44h1M28 45h1M44 45h1M28 46h1M44 46h1M28 47h1M44 47h1M28 48h1M44 48h1M28 49h1M44 49h1M28 50h1M44 50h1M28 51h1M44 51h1M28 52h1M44 52h1M28 53h1M44 53h1M28 54h1M44 54h1M28 55h1M44 55h1M28 56h1M44 56h1M28 57h1M44 57h1M28 58h1M44 58h1M28 59h1M44 59h1M28 60h1M44 60h1M28 61h1M44 61h1M28 62h1M44 62h1M28 63h1M44 63h1M28 64h1M44 64h1M28 65h1M44 65h1M28 66h1M44 66h1M28 67h1M44 67h1M28 68h1M44 68h1M28 69h1M44 69h1M28 70h1M44 70h1M28 71h1M44 71h1M28 72h1M44 72h1M28 73h1M44 73h1M28 74h1M44 74h1M28 75h1M44 75h1M28 76h1M44 76h1M28 77h1M44 77h1M28 78h1M44 78h1M28 79h1M44 79h1M28 80h1M44 80h1M28 81h1M44 81h1M28 82h1M44 82h1M28 83h1M44 83h1M28 84h1M44 84h1M28 85h1M44 85h1M28 86h1M44 86h1M28 87h1M44 87h1M28 88h1M44 88h1M28 89h1M44 89h1M28 90h1M44 90h1M28 91h1M44 91h1M28 92h1M44 92h1M28 93h1M44 93h1M28 94h17"
            />
            {/* The height of this rect will need to change dynamically depending on the player's life */}
            <rect fill="red" x={29} y={4.5} width={15} height={89} />
          </svg>
        </div>
        {/* // PORTRAIT RIGHT LIFE BAR SVG */}
        <div className="z-2 absolute border border-black">
          <p className="text-right">Fish / Cryptid</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 100 100"
            width={200}
            shapeRendering="crispEdges"
          >
            <metadata>
              Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
            </metadata>
            <path
              stroke="#000000"
              d="M50 4h17M50 5h1M66 5h1M50 6h1M66 6h1M50 7h1M66 7h1M50 8h1M66 8h1M50 9h1M66 9h1M50 10h1M66 10h1M50 11h1M66 11h1M50 12h1M66 12h1M50 13h1M66 13h1M50 14h1M66 14h1M50 15h1M66 15h1M50 16h1M66 16h1M50 17h1M66 17h1M50 18h1M66 18h1M50 19h1M66 19h1M50 20h1M66 20h1M50 21h1M66 21h1M50 22h1M66 22h1M50 23h1M66 23h1M50 24h1M66 24h1M50 25h1M66 25h1M50 26h1M66 26h1M50 27h1M66 27h1M50 28h1M66 28h1M50 29h1M66 29h1M50 30h1M66 30h1M50 31h1M66 31h1M50 32h1M66 32h1M50 33h1M66 33h1M50 34h1M66 34h1M50 35h1M66 35h1M50 36h1M66 36h1M50 37h1M66 37h1M50 38h1M66 38h1M50 39h1M66 39h1M50 40h1M66 40h1M50 41h1M66 41h1M50 42h1M66 42h1M50 43h1M66 43h1M50 44h1M66 44h1M50 45h1M66 45h1M50 46h1M66 46h1M50 47h1M66 47h1M50 48h1M66 48h1M50 49h1M66 49h1M50 50h1M66 50h1M50 51h1M66 51h1M50 52h1M66 52h1M50 53h1M66 53h1M50 54h1M66 54h1M50 55h1M66 55h1M50 56h1M66 56h1M50 57h1M66 57h1M50 58h1M66 58h1M50 59h1M66 59h1M50 60h1M66 60h1M50 61h1M66 61h1M50 62h1M66 62h1M50 63h1M66 63h1M50 64h1M66 64h1M50 65h1M66 65h1M50 66h1M66 66h1M50 67h1M66 67h1M50 68h1M66 68h1M50 69h1M66 69h1M50 70h1M66 70h1M50 71h1M66 71h1M50 72h1M66 72h1M50 73h1M66 73h1M50 74h1M66 74h1M50 75h1M66 75h1M50 76h1M66 76h1M50 77h1M66 77h1M50 78h1M66 78h1M50 79h1M66 79h1M50 80h1M66 80h1M50 81h1M66 81h1M50 82h1M66 82h1M50 83h1M66 83h1M50 84h1M66 84h1M50 85h1M66 85h1M50 86h1M66 86h1M50 87h1M66 87h1M50 88h1M66 88h1M50 89h1M66 89h1M50 90h1M66 90h1M50 91h1M66 91h1M50 92h1M66 92h1M50 93h1M66 93h1M50 94h17"
            />
            <rect fill="blue" x={51} y={4.5} width={15} height={89} />
          </svg>
        </div>
      </div>
    </>
    // LANDSCAPE LIFE BAR SVG
    // <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   viewBox="0 -0.5 100 100"
    //   width={200}
    //   shapeRendering="crispEdges"
    // >
    //   <metadata>
    //     Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj
    //   </metadata>
    //   <path
    //     stroke="#000000"
    //     d="M8 40h82M8 41h1M89 41h1M8 42h1M89 42h1M8 43h1M89 43h1M8 44h1M89 44h1M8 45h1M89 45h1M8 46h1M89 46h1M8 47h1M89 47h1M8 48h1M89 48h1M8 49h1M89 49h1M8 50h1M89 50h1M8 51h1M89 51h1M8 52h1M89 52h1M8 53h1M89 53h1M8 54h1M89 54h1M8 55h1M89 55h1M8 56h82"
    //   />
    //   <rect fill="blue" x={9} y={41} width={80} height={14} />
    // </svg>
  )
}

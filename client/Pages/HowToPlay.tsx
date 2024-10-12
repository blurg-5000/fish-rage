import { useNavigate } from 'react-router-dom'

export default function HowToPlay() {
  const navigate = useNavigate()

  return (
    <section className="m-10 flex h-fit flex-col items-center justify-center bg-black p-10 opacity-80">
      <h2 className="font-heading text-xl text-red-600">How to play:</h2>
      <ul className="p-8">
        <li className="text-sm text-red-600">Click on the things</li>
        <li className="text-sm text-red-600">{"Don't die"}</li>
      </ul>
      <button
        className="rounded-md border-2 border-solid border-red-600 p-2 px-6 text-sm text-red-600"
        onClick={() => navigate('/fishing')}
      >
        Play!
      </button>
    </section>
  )
}

import { useNavigate } from 'react-router-dom'

export default function HowToPlay() {
  const navigate = useNavigate()

  return (
    <section className="m-10 flex h-fit flex-col items-center justify-center bg-black p-10 opacity-80">
      <h2 className="font-heading text-xl text-red-600">How to play:</h2>
      <ul className="p-8">
        <li className="text-sm text-red-600">Fish up as many cryptids as you can before your rod breaks or you die</li>
        <li className="text-sm text-red-600">When your rod breaks, you head home with your catch and keep your score</li>
        <li className="text-sm text-red-600">If your boat is destroyed, your score is zero</li>
        <li className="text-sm text-red-600">Every 2 seconds that ANY crab minions are on screen, your boat will take damage</li>
        <li className="text-sm text-red-600">Kill the crab minions with mouse clicks</li>
        <li className="text-sm text-red-600">Fish up the cryptid by pressing any key</li>
        <li className="text-sm text-red-600">Each keypress brings the cryptid closer to being caught, but also strains your rod a little more.</li>
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

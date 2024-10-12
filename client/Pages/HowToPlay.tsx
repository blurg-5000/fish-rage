import { useNavigate } from 'react-router-dom'

export default function HowToPlay() {
  const navigate = useNavigate()

  return (
    <>
      <h2>How to play:</h2>
      <ul>
        <li>Click on the things</li>
        <li>{"Don't die"}</li>
      </ul>
      <button onClick={() => navigate('/fishing')}>Play!</button>
    </>
  )
}

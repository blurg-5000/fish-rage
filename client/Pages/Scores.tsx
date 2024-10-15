import { useQuery } from '@tanstack/react-query'
import { getScores } from '../apis/scores'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Scores() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['scores'],
    queryFn: getScores,
  })
  const [form, setForm] = useState('')
  const navigate = useNavigate()

  const rawScore = useParams().score || 0
  const score = isNaN(+rawScore) ? 0 : +rawScore
  console.log(score)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(() => e.target.value)
  }

  function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // todo: api call
    navigate('/scores/0')
  }

  if (isError) return <p>Error</p>
  if (isLoading) return <p>Loading</p>
  if (data) {
    return (
      <>
        <p>Scores!</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((score) => (
              <tr key={`score${score.id}`}>
                <td>{score.name}</td>
                <td>{score.score}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {score > 0 && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor='name'>Enter your name: </label>
            <input type="text" id="name" name="name" value={form} onChange={(e) => handleChange(e)}/>
          </form>
        )}
      </>
    )
  }
}

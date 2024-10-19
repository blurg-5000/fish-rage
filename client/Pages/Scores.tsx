import { useQuery, useQueryClient } from '@tanstack/react-query'
import { addNewScore, getScores } from '../apis/scores'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Score } from '../../models/models'

export default function Scores() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['scores'],
    queryFn: getScores,
  })
  const queryClient = useQueryClient()
  const [form, setForm] = useState('')
  const navigate = useNavigate()

  const basket = queryClient.getQueryData(['basket'])
  console.log(basket)
  const rawScore = useParams().score || 0
  const score = isNaN(+rawScore) ? 0 : +rawScore

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm(() => e.target.value)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    await addNewScore((data as Score[])[9].id, { name: form, score })
    await queryClient.invalidateQueries({ queryKey: ['scores'] })
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

        {score > data[9].score && (
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="name">Enter your name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form}
              onChange={(e) => handleChange(e)}
            />
          </form>
        )}
        {/* Basic Re-Play button  */}
        <div className="flex justify-center ">
          <button className="rounded-md border-2 border-solid border-red-600 p-2 px-6 text-sm text-red-600">
            <Link to="/fishing">Re-Play</Link>
          </button>
        </div>
      </>
    )
  }
}

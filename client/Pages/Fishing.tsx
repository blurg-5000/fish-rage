import { useQuery } from '@tanstack/react-query'
import { getCryptids } from '../apis/cryptids'
import Game from '../components/Game'
import ErrorPage from './ErrorPage'

export default function Fishing() {
  const {
    data: cryptid,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['cryptids'],
    queryFn: getCryptids,
  })

  if (isError) return <ErrorPage />
  if (isLoading)
    return <p>Please wait for the cryptids to arrive. They are shy.</p>
  if (cryptid) return <Game {...{ cryptid }}></Game>
}

interface Props {
  alive: boolean
  minionId: number
  killMinion: (id: number) => void
}

export default function Minion({ alive, minionId, killMinion }: Props) {
  if (alive)
    return (
      <button onClick={() => killMinion(minionId)}>
        Minion {`${minionId + 1}`}
      </button>
    )
  return <></>
}

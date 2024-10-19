interface Props {
  filepath: string
}

function AudioPlayer({ filepath }: Props) {
  if (filepath)
    return (
      <audio src={filepath} loop autoPlay>
        Your browser does not support the audio element.
      </audio>
    )
}

export default AudioPlayer

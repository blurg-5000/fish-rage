import React, { useEffect, useRef, useState } from 'react'

interface Props {
  filepath: string
}

function AudioPlayer({ filepath }: Props) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  function handlePlayPause() {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
        localStorage.setItem('audioPlaying', 'false')
      } else {
        audioRef.current.loop = true
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error)
        })
        setIsPlaying(true)
        localStorage.setItem('audioPlaying', 'true')
      }
    }
  }

  useEffect(() => {
    // Ensure audioRef.current is defined before accessing it
    if (audioRef.current) {
      // Load the saved state from local storage
      const savedState = localStorage.getItem('audioPlaying')
      if (savedState === 'true') {
        setIsPlaying(true)
        audioRef.current.play().catch((error) => {
          console.error('Error playing audio:', error)
        })
      }
    }

    return () => {
      // Stop the audio when the component unmounts
      if (audioRef.current) {
        audioRef.current.pause()
      }
    }
  }, [])

  return (
    <div className="flex items-center">
      <audio ref={audioRef} src={filepath}>
        Your browser does not support the audio element.
      </audio>
      <p className="mr-2 text-white">Spooky vibes</p>
      <button
        onClick={handlePlayPause}
        className={`relative inline-flex h-6 w-11 items-center rounded-full border-2 border-red-600 transition-colors duration-200 ${
          isPlaying ? 'bg-red-600' : 'bg-black'
        }`}
      >
        <span
          className={`absolute left-0 h-5 w-5 transform rounded-full transition-transform duration-200 ${
            isPlaying ? 'translate-x-5 bg-white' : 'bg-white'
          }`}
        />
      </button>
    </div>
  )
}

export default AudioPlayer

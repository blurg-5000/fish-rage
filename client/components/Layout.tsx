import { Outlet } from 'react-router-dom'
import AudioPlayer from './Audio'

export default function Layout() {
  // todo: add query to store fishing basket

  return (
    <div className="h-screen bg-ocean bg-cover text-white">
      <div className="flex h-screen flex-col justify-between bg-black bg-opacity-60">
        <div className="absolute right-0 top-0 p-4">
          <AudioPlayer filepath={'/audio/bg_music.mp3'} />
        </div>
        <header className="flex flex-col items-center justify-center">
          <h1 className="font-heading text-2xl text-red-600">Fish Rage!</h1>
          <p className="font-heading text-base text-red-600">
            Try not to get killed
          </p>
        </header>
        <main className="mb-auto">
          <Outlet />
        </main>
        <footer className="flex items-center justify-center">
          <p className="text-[1rem] text-red-600">
            Lovingly crafted by Team Yuxedo
          </p>
        </footer>
      </div>
    </div>
  )
}

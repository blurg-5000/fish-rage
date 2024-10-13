import { Outlet } from 'react-router-dom'

export default function Layout() {
  // todo: add query to store fishing basket and score? Or maybe pass score as param in route

  return (
    <>
      <header>
        <h1>Fish Rage!</h1>
        <p>Try not to get killed</p>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Lovingly crafted by Team Yuxedo</footer>
    </>
  )
}

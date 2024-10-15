import { Outlet } from 'react-router-dom'

export default function Layout() {
  // todo: add query to store fishing basket

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

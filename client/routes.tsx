import { createRoutesFromElements, Route } from 'react-router-dom'

import Layout from './components/Layout.tsx'
import HowToPlay from './Pages/HowToPlay.tsx'
import Fishing from './Pages/Fishing.tsx'
import Scores from './Pages/Scores.tsx'

export default createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<HowToPlay />} />
    <Route path="/fishing" element={<Fishing />} />
    <Route path="/scores" element={<Scores />} />
  </Route>,
)

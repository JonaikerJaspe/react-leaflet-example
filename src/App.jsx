import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MapView from './components/MapView'
import 'leaflet/dist/leaflet.css'
function App() {
  const [count, setCount] = useState(0)

  return (
   <MapView />
  )
}

export default App

import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MapView from './components/MapView'
import 'leaflet/dist/leaflet.css'
import Footer from './components/Footer'
import Header from './components/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
  <Fragment>
    <Header
    titulo = "Mapa  Leaflet    "
    />
   <MapView />
    <Footer
    fecha={2023}
    />
  </Fragment>
  )
}

export default App

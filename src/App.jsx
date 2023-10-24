import { useState, Fragment } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import MapView from './components/MapView'
import 'leaflet/dist/leaflet.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Ubicacion from './components/Ubicacion'



function App() {

const [ubicaciones, setUbicacion] = useState ([

    {id: 1, nombre: 'Calle Santa rosa', lat: '9.903876', lng:'-67.369466'},
    {id: 2, nombre: 'San Juan de los Morros', lat: '9.903876', lng:'-67.369466'},
    {id: 3, nombre: 'Urb. Tropical', lat: '9.903876', lng:'-67.369466'},
    {id: 4, nombre: 'Calle Junin', lat: '9.903876', lng:'-67.369466'},
])

  

  return (
  <Fragment>
    <Header
    titulo = "Mapa  Leaflet    "
    />

    <h1>Lista de Ubicaciones</h1>
    {ubicaciones.map(ubicacion =>(
      <Ubicacion 
      ubicacion = {ubicacion}
      
      />
    ))}


   <MapView />
    <Footer
    fecha={2223}
    />
  </Fragment>
  )
}

export default App

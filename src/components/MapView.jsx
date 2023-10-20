import React, { useState } from "react"    
import {MapContainer, TileLayer} from 'react-leaflet'
import Markers from "./Markers"
import {places} from '../assets/data.json'

const MapView = () => {
const [state, setState ] = useState({
    currentLocation:{lat:'9.8887566', lng:'-67.3942166'},
    zoom:13
})


    return <MapContainer center={state.currentLocation} zoom={state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'/>
        <Markers places={places}/>
    </MapContainer>
    
}

export default MapView
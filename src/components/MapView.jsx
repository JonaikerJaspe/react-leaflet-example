import React from "react"    
import {MapContainer, TileLayer} from 'react-leaflet'



const MapView = () => {
    return <MapContainer center={{lat:'9.888495' , lng:'-67.394057'}} zoom={13}>
        <TileLayer/>
    </MapContainer>
    
}

export default MapView
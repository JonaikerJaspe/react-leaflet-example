import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLotation } from './IconLotation';


const Markers = (props) => {
    const {places} = props
    const markes = places.map((place, i ) => (
    <Marker 
    position={place.geometry} 
    icon={IconLotation}
    key={i} />

))
  return ( markes
  )
}

export default Markers


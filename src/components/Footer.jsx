import React from 'react'

const Footer = ({fecha}) => {
  return (
    <div>
        <h4 className='footer-msg'> Leaflet | © OpenStreetMap contributors {fecha}</h4>
    </div>
  )
}

export default Footer
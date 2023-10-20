import React from 'react'
import  Icon  from '../assets/icon.svg';
import L from "leaflet"

export const IconLotation = L.icon({
    iconUrl: Icon,
    iconRetinaUrl : Icon    ,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor:null,
    iconSize: [35, 35],
    className: "LeafLet-venue-icon",
})


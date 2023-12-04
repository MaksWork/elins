import React from 'react'
import '../styles/Map.scss';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const CheckMap = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  })
  
  if(!isLoaded) return <div>Loading...</div>
  return(
    <Map/>
  );
}

const Map = () =>{
  return <GoogleMap zoom={15} center={{lat: 56.9829166, lng: 24.2540986}} mapContainerClassName='map_container'></GoogleMap>
}


export default CheckMap;


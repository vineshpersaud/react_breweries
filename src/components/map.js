import React from 'react';
import GoogleMapReact from 'google-map-react';
import './map.css'
import BeerIcon from './beer.png';

const Marker = ({ Brewery }) => (

  <div id='marker'><img src={BeerIcon} /></div>

)



const Map = ({brewery}) => (

  <div style={{ height: '50vh', width: '80%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBtriOkBKss0lD8LIV25l3MRRIJPKS1-bY'}}
      defaultCenter={[41.2033, -77.1945]}
      defaultZoom={7}
    >
      <Marker
        lat={brewery.latitude}
        lng={brewery.longitude}
        Brewery={brewery.name}
      />
    </GoogleMapReact>
  </div>
)

export default Map

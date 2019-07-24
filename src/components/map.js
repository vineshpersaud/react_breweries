import React from 'react';
import GoogleMapReact from 'google-map-react';
import '../stylesheets/map.css'
import BeerIcon from '../images/beer.png';

const Marker = ({ Brewery }) => (

  <div id='marker'><img alt="map marker" src={BeerIcon} /></div>

)



const Map = ({latitude,longitude,name}) => (

  <div style={{ height: '50vh', width: '80%' }}>
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyBtriOkBKss0lD8LIV25l3MRRIJPKS1-bY'}}
      defaultCenter={[41.2033, -77.1945]}
      defaultZoom={7}
    >
      <Marker
        lat={latitude}
        lng={longitude}
        Brewery={name}
      />
    </GoogleMapReact>
  </div>
)

export default Map

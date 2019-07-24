import React from 'react';
import './brewerycard.css'


const BreweryCard = ({brewery}) => (
  <div class="BreweryCard" >
    <h3>{brewery.name}</h3>
    <p><b>Brewery Type -</b> {brewery.brewery_type}</p>
    <h5>Address</h5>
      <p>{brewery.street}</p>
      <p>{brewery.city}, {brewery.postal_code}</p>
      <p><a href={brewery.website_url}>Website</a></p>
  </div>
)

export default BreweryCard

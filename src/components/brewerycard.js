import React from 'react';
import '../stylesheets/brewerycard.css'
import { Link } from 'react-router-dom';


const BreweryCard = ({brewery}) => (
  <div class="BreweryCard" >
    <Link to={`/brewery/${brewery.id}`}>
    <h3>{brewery.name}</h3>
    </Link>
    <p><b>Brewery Type</b> - {brewery.brewery_type}</p>
    <h5>Address</h5>
      <p>{brewery.street}</p>
      <p>{brewery.city}, {brewery.postal_code}</p>
      <p><a href={brewery.website_url}>Website</a></p>
  </div>
)

export default BreweryCard

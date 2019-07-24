import React,{Component} from 'react';
import Map from '../components/map';
import '../stylesheets/breweryshow.css';

class BreweryShow extends Component {
  constructor(){
    super();
    this.state ={
      name:'',
      street:'',
      city:'',
      brewery_type: '',
      postal_code:'',
      website:'',
      longitude:'',
      latitude:''
    }
  }

  componentDidMount(){
    fetch('https://api.openbrewerydb.org/breweries/'+ this.props.match.params.breweryId)
          .then(response => response.json())
          .then(brewery => this.setState({
            name: brewery.name,
            street: brewery.street,
            city: brewery.city,
            postal_code: brewery.postal_code,
            website: brewery.website_url,
            brewery_type: brewery.brewery_type,
            latitude: brewery.latitude,
            longitude: brewery.longitude
          }))
  }

  render(){

   return(
    <div >
      <div id="details">
      <h3>{this.state.name}</h3>
      <p><b>Brewery Type -</b> {this.state.brewery_type}</p>
      <h5>Address</h5>
      <p>{this.state.street}</p>
      <p>{this.state.city}, {this.state.postal_code}</p>
      <p><a href={this.state.website}>Website</a></p>
    </div>
      <Map
          latitude={this.state.latitude}
          longitude={this.state.longitude}
          name={this.state.name}
      />

    </div>)

  }
}

export default BreweryShow;

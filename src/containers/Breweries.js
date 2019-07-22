import React, {Component} from 'react'


class Breweries extends Component{
  constructor(){
    super();
    this.state ={
      breweries: []
    }
  }



  componentDidMount(){
    fetch('https://api.openbrewerydb.org/breweries?by_state=pennsylvania')
          .then(response => response.json())
          .then(x => this.setState({breweries: x}))
  }


  render(){
    debugger
    return(
      <div>
        <h1>Breweries</h1>
      </div>
    )
  }

}

export default Breweries;

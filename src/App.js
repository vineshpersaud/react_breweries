import React from 'react';
import Breweries from './containers/Breweries.js'
import BreweryShow from './containers/BreweryShow.js'

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import NavBar from './components/NavBar';

const App = (props) => {
  return (
    <Router>
      <Switch>
      <div className="app">
        <NavBar />
        <Route exact path="/" component={Breweries} />
        <Route exact path="/Breweries" component={Breweries} />
        <Route exact path={`/Brewery/:breweryId(\\d+)`} component={BreweryShow}/>
      </div>
    </Switch>
    </Router>
  );
};

export default App

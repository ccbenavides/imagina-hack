import React, { Component } from 'react';
import Principal from './layout/Principal';
import Login from './layout/Login';
import Register from './layout/Register';
import Reto from './container/Reto';
import Reto2 from './container/Reto2';
import Splash from './layout/Splash';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import './splash.png';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Splash}/>
              <Route  path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route  path="/principal" component={Principal}/>
              <Route  path="/reto/1" component={Reto}/>
              <Route  path="/reto/2" component={Reto2}/>
              <Route  path="/reto/3" component={Reto}/>
              
            </div>
        </Router>
      </div>
    );
  }
}

export default App;

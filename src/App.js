import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/layouts/Header';
import Home from './components/pages/Home';

import ArticuloState from './context/articulos/articuloState'



function App() {
  
  return (
    <ArticuloState>
      <Router>
          <Header />
          <Switch>
            <Route path="/about">
              
            </Route>
            <Route path="/login">
            
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      </Router>
    </ArticuloState>
  );
}

export default App;
// "start": "react-scripts start",
// "build": "react-scripts build",
//  "test": "react-scripts test",
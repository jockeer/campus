import React from 'react';

import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Header from './components/layouts/Header';
import Home from './components/pages/Home';



function App() {
  
  return (
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
  );
}

export default App;
// "start": "react-scripts start",
// "build": "react-scripts build",
//  "test": "react-scripts test",
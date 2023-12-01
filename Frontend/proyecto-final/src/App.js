import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <div>
      <Router>
          <div className="container">
              <Switch>
                <Route path = "/" element = {<HomeComponent />}></Route>
              </Switch>
              
          </div>
      </Router>
    </div>
  
  );
}

export default App;

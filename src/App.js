import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import './App.css';
import React from 'react';

import NavBar from './component/navBar';
import AllStudent from './component/allStudent';
import AddStudent from './component/addStudent';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route path="/allStudent" component={AllStudent} exact></Route>
            <Route path="/addStudent" component={AddStudent} exact></Route>
          </Switch>
        
        </BrowserRouter>
    </div>
  );
}

export default App;

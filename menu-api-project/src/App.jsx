import React, { useState } from 'react';
import { Router } from '@reach/router';
import NavBar from './Components/NavBar'
import Basket from './Containers/Basket/Basket';
import Dashboard from './Containers/Dashboard/Dashboard';
import NotFound from './Containers/NotFound/NotFound';


function App() {
  return (
    
    <div >
      <NavBar />
      <Router>
        <Basket path="/basket"/>
        <Dashboard path="/"/>
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;

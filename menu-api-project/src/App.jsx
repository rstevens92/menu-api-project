import React, { useState } from 'react';
import { Router } from '@reach/router';

import NavBar from './Components/NavBar';
import Home from './Containers/Home';
import Basket from './Containers/Basket/Basket';
import Menu from './Containers/Menu/Menu';
import Booking from './Containers/Booking/Booking'
import Contact from './Containers/Contact';
import NotFound from './Containers/NotFound/NotFound';

import styles from './App.module.scss';


function App() {
  return (
    
    <div className={styles.app} >
      <NavBar />
      <Router>
        <Home path='/'/>
        <Basket path="/basket"/>
        <Menu path="/menu"/>
        <Contact path="/contact"/>
        <Booking path="/booking"/>
        <NotFound default/>
      </Router>
    </div>
  );
}

export default App;

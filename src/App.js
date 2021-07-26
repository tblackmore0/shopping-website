import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Shop from './Components/Shop';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';



function App() {

const [shoppingCart, updateCart] = React.useState([]);


  return (
    <Router >
      <div className='window'>
        <NavBar shoppingCart={shoppingCart}/>
        <Switch>
          <Route path ="/" exact>
            <Home />
          </Route>
          <Route path ="/shop">
            <Shop shoppingCart={shoppingCart} updateCart={updateCart}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

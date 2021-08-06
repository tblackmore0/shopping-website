import Home from './Components/Home';
import {NavBar} from './Components/NavBar';
import Shop from './Components/Shop';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import {itemsList} from './Components/Shop'
import {Checkout} from './Components/Checkout';



function App() {

const [shoppingCart, updateCart] = React.useState([]);


  return (
    <Router >
      <div className='window'>
        <NavBar shoppingCart={shoppingCart} updateCart={updateCart}/>
        <Switch>
          <Route path ="/shopping-website/" exact>
            <Home />
          </Route>
          <Route path ="/shopping-website/shop">
            <Shop shoppingCart={shoppingCart} updateCart={updateCart}/>
          </Route>
          <Route path ="/shopping-website/checkout">
            <Checkout shoppingCart={shoppingCart} updateCart={updateCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

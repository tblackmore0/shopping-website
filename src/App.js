import Home from './Components/Home';
import {NavBar} from './Components/NavBar';
import Shop from './Components/Shop';
import {HashRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import {itemsList} from './Components/Shop'
import {Checkout} from './Components/Checkout';



function App() {

const [shoppingCart, updateCart] = React.useState([]);

/* setTimeout(function () {
  let viewheight = window.height;
  let viewwidth = window.width;
  let viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute("content", "height=" + viewheight + "px, width=" + viewwidth + "px, initial-scale=1.0");
}, 300); */


  return (
    <Router >
      <div className='window'>
        <NavBar shoppingCart={shoppingCart} updateCart={updateCart}/>
        <Switch>
          <Route path ="/" exact>
            <Home />
          </Route>
          <Route path ="/shop">
            <Shop shoppingCart={shoppingCart} updateCart={updateCart}/>
          </Route>
          <Route path ="/checkout">
            <Checkout shoppingCart={shoppingCart} updateCart={updateCart} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import {Link} from 'react-router-dom';
import PushToCart from './PushToCart';
import {ShowCartPreview, HideCartPreview, CartPreview} from './CartPreview'
import React, { useState } from 'react';

function NavBar (props) {

let shoppingCart = props.shoppingCart

return (
    <div className='navbar' id='navBar'>
            <div className='logo' id='logo' onClick={changeStylesHome}>
                <Link to='/'>
                    Jaeger.
                </Link>
            </div>
        <div className='cartDiv' onMouseOver={(e) => ShowCartPreview(shoppingCart)} onMouseLeave={HideCartPreview}>
            <img className='shoppingCart' src='siteImages/Basket.png' alt='shopping basket' />
            <span className='cartNumber' onChange={console.log(shoppingCart)}>{shoppingCart.length}</span>
            <div id='cartPreview' className='cartPreviewDiv'>
                <CartPreview shoppingCart={shoppingCart}/>
            </div>
        </div>

        
    </div>
)};



function changeStylesHome () {

    document.getElementById('navBar').className='navbar'
    document.getElementById('logo').className='logo'

}
    

export default NavBar;
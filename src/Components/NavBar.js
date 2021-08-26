import {Link} from 'react-router-dom';
import PushToCart from './PushToCart';
import {ShowCartPreview, HideCartPreview, CartPreview} from './CartPreview'
import React, { useState } from 'react';
import { backgroundHandler } from './ShopModals';
import { toggleCartCheckout } from './Checkout';
import { checkoutBackgroundHandler } from './Checkout';

function NavBar (props) {

let shoppingCart = props.shoppingCart

return (
    <React.Fragment>
    <div className='navbar' id='navBar' onClick={navBarHandler}>
            <div className='logo' id='logo'>
                <Link to="/">
                    <p id='logoText' className = 'logoText'> Jaeger. </p>
                </Link>
            </div>
        <div id='cartDiv' className='cartDiv' >
            <img id='shoppingCartImg' className='shoppingCart' src='siteImages/shopping-bag.png' alt='shopping basket' />
            <span id='cartNumber' className='cartNumber'>{AddCart(shoppingCart)}</span>
        </div>

        
    </div>

<div id='cartPreview' className='cartPreviewDiv' style={{display: 'none'}}>
<CartPreview shoppingCart={shoppingCart} updateCart={props.updateCart}/>
</div>
</React.Fragment>
)};

function AddCart (shoppingCart) {
   let sum = shoppingCart.reduce((accumulator, item) => accumulator + item.quantity, 0 )
   return sum
}

function navBarHandler (e) {
    let preview = document.getElementById('cartDiv')
    let img = document.getElementById('shoppingCartImg')
    let number = document.getElementById('cartNumber')
    let cart = document.getElementById('cartPreview')
    let checkout = document.getElementById('checkoutPage')
    let home = document.getElementById('home')
    let logo = document.getElementById('logoText');

    if (e.target == logo) {
        if (cart) {
            cart.style.display = 'none';
            return;
        }
    
    return 
}

    if ( e.target == preview || e.target == img|| e.target == number || e.target == logo) {

        if (checkout || home) {
            toggleCartCheckout();
        } else {
        ShowCartPreview(e)
    }}

    else {
        if (checkout || home) {
            checkoutBackgroundHandler ();
        } else {
        backgroundHandler(e)
        }
}}

export {NavBar, AddCart}
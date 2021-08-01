import {Link} from 'react-router-dom';
import PushToCart from './PushToCart';
import {ShowCartPreview, HideCartPreview, CartPreview} from './CartPreview'
import React, { useState } from 'react';
import { backgroundHandler } from './ShopModals';

function NavBar (props) {

let shoppingCart = props.shoppingCart

return (
    <div className='navbar' id='navBar' onClick={navBarHandler}>
            <div className='logo' id='logo'>
                <Link to='/'>
                    Jaeger.
                </Link>
            </div>
        <div id='cartDiv' className='cartDiv' /* onClick={navBarHandler}*/  >
            <img id='shoppingCartImg' className='shoppingCart' src='siteImages/Basket.png' alt='shopping basket' />
            <span className='cartNumber'>{AddCart(shoppingCart)}</span>
            <div id='cartPreview' className='cartPreviewDiv' >
                <CartPreview shoppingCart={shoppingCart} updateCart={props.updateCart}/>
            </div>
        </div>

        
    </div>
)};


function AddCart (shoppingCart) {
   let sum = shoppingCart.reduce((accumulator, item) => accumulator + item.quantity, 0 )
   return sum
}

function navBarHandler (e) {
    let preview = document.getElementById('shoppingCartImg')
    let cart = document.getElementById('cartPreview')

    if (e.target == preview) {
        ShowCartPreview(e)
    }

    else {
        backgroundHandler(e)

}}

export default NavBar;
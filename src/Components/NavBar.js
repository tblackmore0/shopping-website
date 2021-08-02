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
        <div id='cartDiv' className='cartDiv' >
            <img id='shoppingCartImg' className='shoppingCart' src='siteImages/Basket.png' alt='shopping basket' />
            <span id='cartNumber' className='cartNumber'>{AddCart(shoppingCart)}</span>
            <div id='cartPreview' className='cartPreviewDiv' style={{display: 'none'}}>
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
    let preview = document.getElementById('cartDiv')
    let img = document.getElementById('shoppingCartImg')
    let number = document.getElementById('cartNumber')
    let cart = document.getElementById('cartPreview')

    console.log(e.target)

    if (e.target == preview || e.target == img|| e.target == number) {
        ShowCartPreview(e)
    }

    else {
        backgroundHandler(e)

}}

export {NavBar, AddCart}
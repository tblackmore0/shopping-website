import CartPreviewItem from "./CartPreviewItem";
import React, { useState } from 'react';
import { itemsList } from "./Shop";
import { hideModal } from "./ShopModals";
import {Link} from 'react-router-dom';

function DeleteItem (item, shoppingCart, updateCart) {

        let itemToDelete = item

        itemToDelete.quantity = 0
        
        let newCart = shoppingCart.filter(item => item.objectID != itemToDelete.objectID )
        updateCart(shoppingCart = newCart)
    }


function HideCartPreview (e) {
    const modalBackground = document.getElementById('modalBackground')
    let cartPreview = document.getElementById('cartPreview')

    modalBackground.style.display = 'none'
    cartPreview.style.display='none';
}

function CartPreview (props) {

    let shoppingCart = props.shoppingCart;

   const cartPreview = document.getElementById('cartItemsPreview')

    if (shoppingCart.length < 1) {
        return (
        <div className='emptyCart'>
            <span>Cart is Empty</span>
        </div>
        )
    }

    else {
    return (
        <div id='cartItemsPreview' className='cartItemsPreview cartItemsScroll'>
            {shoppingCart.map((item) => (
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={shoppingCart} item={item}/>
            ))}
        <div className ='previewLinks'>
            <div className='totalWrapper'>
            <div className='cartTotal'>
                £{cartSum(shoppingCart)}
            </div>
            </div>
                <Link to="/checkout" updateCart={props.updateCart} shoppingCart={shoppingCart} >
                    <div className='checkoutLink'>View Basket</div>
                </Link>
            </div>
        </div>

    )
}}

function ShowCartPreview () {

    const cartPreview = document.getElementById('cartPreview')
    const modalBackground = document.getElementById('modalBackground');
    const modalBackgroundHome = document.getElementById('modalBackgroundHome');
    const modals = document.getElementById('modalList');
    const home = document.getElementById('home')

    if(home) {
        cartPreview.style.display = 'flex';
        modalBackgroundHome.style.display = 'flex';
        return
    }

    else if (modals.dataset.status === 'on') {
        if (cartPreview.style.display === 'none') {
            cartPreview.style.display = 'flex';
            modalBackground.style.display = 'flex';
    }
        else  {
            cartPreview.style.display = 'none';
}}

    if (modals.dataset.status === 'off') {
        if (cartPreview.style.display === 'none') {
            cartPreview.style.display = 'flex';
            modalBackground.style.display = 'flex';
        }
        else  {
            cartPreview.style.display = 'none';
            modalBackground.style.display = 'none';
        }
    }
}

function cartSum (shoppingCart) {
    let cart = shoppingCart.reduce((sum, i) => sum + i.price*i.quantity, 0)
    return cart
}

export {ShowCartPreview, HideCartPreview, CartPreview, DeleteItem, cartSum}
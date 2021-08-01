import CartPreviewItem from "./CartPreviewItem";
import React, { useState } from 'react';
import { itemsList } from "./Shop";
import { hideModal } from "./ShopModals";

function DeleteItem (e, item, shoppingCart, updateCart) {

        let itemID = item.objectID

        updateCart (shoppingCart.filter(item => item.objectID != itemID ))
    }


function HideCartPreview (e) {
    const modalBackground = document.getElementById('modalBackground')
    let cartPreview = document.getElementById('cartPreview')

    modalBackground.style.display = 'none'
    cartPreview.style.display='none';
}

function CartPreview (props) {

    let shoppingCart = props.shoppingCart;

   let cartSum = shoppingCart.reduce((sum, i) => sum + i.price, 0)

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
        <div id='cartItemsPreview' className='cartItemsPreview'>
            {shoppingCart.map((item) => (
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={shoppingCart} item={item}/>
            ))}

            <div className='cartTotal'>
                £{cartSum}
            </div>
            <div className='checkoutLink'>View Basket</div>
        </div>

    )
}}

function ShowCartPreview () {

    const cartPreview = document.getElementById('cartPreview')
    const modalBackground = document.getElementById('modalBackground')
    const modals = document.getElementById('modalList')

    if (modals.dataset.status === 'on') {
        console.log('on')
        if (cartPreview.style.display === 'none') {
            cartPreview.style.display = 'flex';
            modalBackground.style.display = 'flex';
    }
        else  {
            cartPreview.style.display = 'none';
}}

    if (modals.dataset.status === 'off') {
        console.log('off')
        if (cartPreview.style.display === 'none') {
            console.log('wtf')
            cartPreview.style.display = 'flex';
            modalBackground.style.display = 'flex';
        }
        else  {
            cartPreview.style.display = 'none';
            modalBackground.style.display = 'none';
        }
    }
}

export {ShowCartPreview, HideCartPreview, CartPreview, DeleteItem}
import CartPreviewItem from "./CartPreviewItem";
import CartPreviewItemFaded from "./CartPreviewItemFaded";
import React, { useState } from 'react';
import { itemsList } from "./Shop";
import { hideModal } from "./ShopModals";

function DeleteItem (e, item, shoppingCart, updateCart) {

        let itemID = item.objectID

        updateCart (shoppingCart.filter(item => item.objectID != itemID ))
    }




function ShowCartPreview () {
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='flex';
    const modalBackground = document.getElementById('modalBackground')
    modalBackground.style.display = 'flex';
}

function HideCartPreview (e) {
    const modalBackground = document.getElementById('modalBackground')
    const navBar = document.getElementById('navBar')
    const cartDiv = document.getElementById('cartDiv')
    modalBackground.style.display = 'none'
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='none';
}

function CartPreview (props) {

    let shoppingCart = props.shoppingCart;

    let lastItem = shoppingCart[shoppingCart.length - 1]
    let secondLastItem = shoppingCart[shoppingCart.length - 2]
    let thirdLastItem = shoppingCart[shoppingCart.length - 3]
    let fourthLastItem = shoppingCart[shoppingCart.length - 4]

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
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={shoppingCart} item={lastItem}/>
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={shoppingCart} item={secondLastItem}/>
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={shoppingCart} item={thirdLastItem} />
            <CartPreviewItemFaded updateCart={props.updateCart} shoppingCart={shoppingCart}  item={fourthLastItem} />
            <div className='cartTotal'>
                £{cartSum}
            </div>
            <div className='checkoutLink'>View Basket</div>
        </div>

    )
}}

export {ShowCartPreview, HideCartPreview, CartPreview, DeleteItem}
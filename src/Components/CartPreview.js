import CartPreviewItem from "./CartPreviewItem";
import CartPreviewItemFaded from "./CartPreviewItemFaded";
import React, { useState } from 'react';

function RemoveCartItem (e, item, shoppingCart, updateCart) {

        let itemID = item.objectID
        console.log(itemID)

        updateCart (shoppingCart.filter(item => item.objectID != itemID ))
        console.log(shoppingCart) 
    }


function ShowCartPreview (shoppingCart) {
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='flex';
}

function HideCartPreview () {
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='none';
}

function CartPreview (props) {
    let lastItem = props.shoppingCart[props.shoppingCart.length - 1]
    let secondLastItem = props.shoppingCart[props.shoppingCart.length - 2]
    let thirdLastItem = props.shoppingCart[props.shoppingCart.length - 3]
    let fourthLastItem = props.shoppingCart[props.shoppingCart.length - 4]

   let cartSum = props.shoppingCart.reduce((sum, i) => sum + i.price, 0)

    if (props.shoppingCart.length < 1) {
        return (
        <div className='emptyCart'>
            <span>Cart is Empty</span>
        </div>
        )
    }

    else {
    return (
        <div className='cartItemsPreview'>
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={props.shoppingCart} item={lastItem}/>
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={props.shoppingCart} item={secondLastItem}/>
            <CartPreviewItem updateCart={props.updateCart} shoppingCart={props.shoppingCart} item={thirdLastItem} />
            <CartPreviewItemFaded updateCart={props.updateCart} shoppingCart={props.shoppingCart}  item={fourthLastItem} />
            <div className='cartTotal'>
                £{cartSum}
            </div>
            <div className='checkoutLink'>View Basket</div>
        </div>

    )
}}

export {ShowCartPreview, HideCartPreview, CartPreview, RemoveCartItem}
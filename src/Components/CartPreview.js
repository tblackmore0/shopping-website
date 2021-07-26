import CartPreviewItem from "./CartPreviewItem";
import CartPreviewItemFaded from "./CartPreviewItemFaded";
import React, { useState } from 'react';

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
            <CartPreviewItem item={lastItem}/>
            <CartPreviewItem item={secondLastItem}/>
            <CartPreviewItemFaded item={thirdLastItem} />
            £{cartSum}
            <button className='checkoutLink'>View Basket</button>
        </div>

    )
}}

export {ShowCartPreview, HideCartPreview, CartPreview}
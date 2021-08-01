import React, { useState } from 'react';
import ShopModals from './ShopModals';
import {itemsList} from './Shop'
import {hideModal} from './ShopModals';
import {CartPreview} from './CartPreview'


function PushToCart (e, shoppingCart, updateCart) {

    let itemID = e.target.attributes.getNamedItem("data-key").value;
    
    itemsList.map(function (item) {

        if (item.objectID == itemID) {

          if (shoppingCart.includes(item)) {
            item.quantity++
            updateCart([...shoppingCart])
          
          }
          else {
            item.quantity++
            updateCart(shoppingCart.concat(item));
        }}
})
    
    hideModal(e)
    const modalBackground = document.getElementById('modalBackground')
    modalBackground.style.display = 'none'

  }; 


export default PushToCart
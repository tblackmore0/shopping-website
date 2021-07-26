import React, { useState } from 'react';
import ShopModals from './ShopModals';
import {itemsList} from './Shop'
import {hideModal} from './ShopModals';


function PushToCart (e, shoppingCart, updateCart) {

    let itemID = e.target.attributes.getNamedItem("data-key").value;
    let mappedArray = itemsList.map(function (item) {
        if (item.objectID == itemID) {
          updateCart (shoppingCart.concat(item));
        }
    })
    hideModal(e)
    const modalBackground = document.getElementById('modalBackground')
    modalBackground.style.display = 'none'

  }; 


export default PushToCart
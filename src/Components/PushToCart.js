import React, { useState } from 'react';
import ShopModals from './ShopModals';
import {itemsList} from './Shop'


function PushToCart (e, shoppingCart, updateCart) {
    let itemID = e.target.attributes.getNamedItem("data-key").value;
    let mappedArray = itemsList.map(function (item) {
        if (item.objectID == itemID) {
          updateCart (shoppingCart.concat(item));
        }
    })
  }; 


export default PushToCart
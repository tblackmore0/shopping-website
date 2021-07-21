import React, { useState } from 'react';
import PushToCart from './PushToCart';

function ShopModals (props) {

let shoppingCart = props.shoppingCart;
let updateCart = props.updateCart;

    return (

        <div id ='modalBackground' onClick={hideModal}>
            <ul id='modalList'>
              {props.items.map((item) => (

              <li className = 'itemModal' data-key={item.objectID}>
                <img className = 'modalImage' src={item.imageURL} alt='why not work'></img>
                <div className = 'modalDiv'>
                    <span className='modalTitle'>{item.name}</span>
                    <p className='modalText'>{item.description}</p>
                    <div className='addToCart'>
                        <input type='number' step='1' placeholder='1'></input>
                        <button onClick={(e) => PushToCart(e, shoppingCart, updateCart)} data-key={item.objectID}>Add to cart</button>
                    </div> 
                </div>
              </li>

              ))}
            </ul>
        
        </div>

    )};

function hideModal (e) {
    
    const modalListArray = Array.from(document.getElementsByClassName('itemModal'))
    const modalBackground = document.getElementById('modalBackground')

    if (e.target === modalBackground) {

        modalBackground.style.display = 'none'

    const mappedList = modalListArray.map(function (item) {
        item.style.display = 'none'
    })}
}

    export default ShopModals
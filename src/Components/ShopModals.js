import React, { useState } from 'react';
import PushToCart from './PushToCart';
import { HideCartPreview } from './CartPreview';

function ShopModals (props) {

let shoppingCart = props.shoppingCart;
let updateCart = props.updateCart;

    return (
        <div id ='modalBackground' onClick={backgroundHandler}>
            <ul id='modalList' data-status={'off'}>
              {props.items.map((item) => (

              <li className = 'itemModal' data-key={item.objectID}>
                <img className = 'modalImage' src={item.imageURL} alt={item.name}></img>
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
    
    const modalListArray = Array.from(document.getElementsByClassName('itemModal'));
    const modalBackground = document.getElementById('modalBackground');
    const list = document.getElementById('modalList');
    list.dataset.status = 'off'

        modalBackground.style.display = 'none'

    const mappedList = modalListArray.map(function (item) {
        item.style.display = 'none'
    })}


function backgroundHandler (e) {

    const preview = document.getElementById('cartPreview')
    const modalBackground = document.getElementById('modalBackground')
    const navBar = document.getElementById('navBar')
    const cart = document.getElementById('cartDiv')
    const logo = document.getElementById('logo')

    if (e.target == modalBackground || e.target == logo || (e.target == navBar && e.target != cart))  {
    hideModal(e);
    HideCartPreview(e);
}}

    export default ShopModals
    export {hideModal, backgroundHandler}
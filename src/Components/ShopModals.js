import React, { useState } from 'react';
import PushToCart from './PushToCart';
import { HideCartPreview } from './CartPreview';
import {useRef} from 'react';


function ShopModals (props) {

let shoppingCart = props.shoppingCart;
let updateCart = props.updateCart;

    return (
        
            <React.Fragment>
            <ul id='modalList' data-status={'off'}>
              {props.items.map((item) => (

              <li className ={modalPosition(item)} data-key={item.objectID}>
                <img className = 'modalImage' src={item.imageURL} alt={item.name}></img>
                <div className = 'modalDiv'>
                    <span className='modalTitle'>{item.name}</span>
                    <div className='modalTextDiv'>
                    <p className='modalText'>{item.description1}</p>
                    <p className='modalText'>{item.description2}</p>
                    </div>
                    <div className='addToCart'>
                        <form className='cartForm' onSubmit={(e) => PushToCart(e, shoppingCart, updateCart)} data-key={item.objectID}>
                            <input className = 'input' type='number' step='1' placeholder='1' />
                            <button className='addToCartButton'>Add to cart</button>
                        </form>
                    </div> 
                </div>
              </li>

              ))}
            </ul>
            <div id ='modalBackground' onClick={backgroundHandler}>
            </div>
            </React.Fragment>
            

    )};

function modalPosition (item) {
    if (item.objectID <3 ) {
        return 'itemModal itemModalTop'
    }

    if (item.objectID <6) {
        return 'itemModal itemModalMid'
    }

    if (item.objectID <9) {
        return 'itemModal itemModalBottom'
    }
}


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
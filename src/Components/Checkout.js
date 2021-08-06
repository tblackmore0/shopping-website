import { HideCartPreview, ShowCartPreview } from "./CartPreview"
import {Link} from 'react-router-dom'

function Checkout () {

    checkoutTransition();

    return (
    
        <div id='checkoutPage' className='checkoutPage'>
            <div className='checkoutImg' />
            <img id='returnArrow' className='returnArrow' src='siteImages/Arrow.png' alt='return to shop'/>
            <Link to="/shop">
            <div className ='returnToShop' onMouseEnter={addHover} onMouseOut={removeHover}>
                Return to Shop
            </div>
            </Link>
            <div className ='checkoutInfo'>
                Coming Soon!
            </div>
            <div id ='modalBackground' onClick={checkoutBackgroundHandler}>
            </div>
        </div>
        
    )
}

function addHover () {
    let arrow = document.getElementById('returnArrow');
    arrow.classList.add('returnArrowHover');
}

function removeHover () {
    let arrow = document.getElementById('returnArrow');
    arrow.classList.remove('returnArrowHover');
}

function toggleCartCheckout () {
    const cartPreview = document.getElementById('cartPreview')
    const modalBackground = document.getElementById('modalBackground')

    if (cartPreview.style.display === 'none') {
        cartPreview.style.display = 'flex';
        modalBackground.style.display = 'flex';
    } else {
        cartPreview.style.display = 'none';
        modalBackground.style.display = 'none';
    }
}

function checkoutBackgroundHandler (e) {
    const cartPreview = document.getElementById('cartPreview')
    const modalBackground = document.getElementById('modalBackground')

    cartPreview.style.display = 'none'
    modalBackground.style.display = 'none'
}

function checkoutTransition () {
    const cartPreview = document.getElementById('cartPreview')

    if (cartPreview) {
        cartPreview.style.display = 'none'
    }
}

export {Checkout, toggleCartCheckout, checkoutBackgroundHandler}
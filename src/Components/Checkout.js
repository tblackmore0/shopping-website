import { HideCartPreview, ShowCartPreview } from "./CartPreview"
import {Link} from 'react-router-dom'

function Checkout () {

    checkoutTransition();

    setTimeout(function() {
        
        let navBar = document.getElementById('navBar');
        let logo = document.getElementById('logo');
        let shoppingC = document.getElementById('shoppingCartImg')
        let cartN = document.getElementById('cartNumber')
    
        shoppingC.src = ('siteImages/shopping-bag-white.png');
        cartN.style.color = ('seashell');
        logo.style.color = ('seashell');
        navBar.style.background = ('linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)');
    
        }, 100);

    return (
    
        <div id='checkoutPage' className='checkoutPage'>
            <div className='checkoutImg' />
            <Link to="/shop">
            <img id='returnArrow' className='returnArrow  returnArrowHover' src='siteImages/Arrow.png' alt='return to shop'/>
            </Link>
            <Link to="/shop">
            <div className ='returnToShop' /* onMouseEnter={addHover} onMouseOut={removeHover} */>
                Return to Shop
            </div>
            </Link>
            <div className='infoWrapper'>
            <div className ='checkoutInfo'>
                Coming Soon!
            </div>
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
    const modalBackgroundHome = document.getElementById('modalBackgroundHome');
    const home = document.getElementById('home')

 //   console.log(window.location.href.pathname === ("/shopping-website#/"))
 //   console.log(window.location.pathname);

    if(home) {
        if (cartPreview.style.display === 'none') {
            cartPreview.style.display = 'flex';
            modalBackgroundHome.style.display = 'flex';
        } else {
            cartPreview.style.display = 'none'
            modalBackgroundHome.style.display = 'none';
        } 
            
        return
    }

    else if (cartPreview.style.display === 'none') {
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
    const modalBackgroundHome = document.getElementById('modalBackgroundHome');
    const home = document.getElementById('home')


    if(home) {

    cartPreview.style.display = 'none'
    modalBackgroundHome.style.display = 'none'
    return

    } else {

    cartPreview.style.display = 'none'
    modalBackground.style.display = 'none'
}}

function checkoutTransition () {
    const cartPreview = document.getElementById('cartPreview')

    if (cartPreview) {
        cartPreview.style.display = 'none'
    }
}

export {Checkout, toggleCartCheckout, checkoutBackgroundHandler}
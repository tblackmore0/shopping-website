function Checkout () {

 /* let cart = document.getElementById('cartDiv');
  cart.style.display = 'none'; */

    return (
        <div className='checkoutPage'>
            <div className='checkoutImg' />
            <img id='returnArrow' className='returnArrow' src='siteImages/Arrow.png' alt='return to shop'/>
            <div className ='returnToShop' onMouseEnter={animateArrow}>
                Return to Shop
            </div>
            <div className ='checkoutInfo'>
                Coming Soon!
            </div>
        </div>
    )
}

function animateArrow () {
    let arrow = document.getElementById('returnArrow')
    arrow.style.transform = 'translate(10%)'
    setTimeout(function () {arrow.style.transform='translate(-5%)'}, 100)
}

export default Checkout
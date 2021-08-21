import {Link} from 'react-router-dom'
import { checkoutBackgroundHandler } from './Checkout';

function Home () {

    setTimeout(function() {
        
        let navBar = document.getElementById('navBar');
        let logo = document.getElementById('logo');
        let shoppingC = document.getElementById('shoppingCartImg')
        let cartN = document.getElementById('cartNumber')

        shoppingC.src = ('siteImages/shopping-bag.png');
        cartN.style.color = ('black');
        logo.style.color = ('black');
        navBar.style.background = ('seashell');
    
        }, 100);
    

    return (
        <div id='home' className='home'>
            <div className ='homeText'>


                <h2 className='homeTitle'>POWERED BY SIMPLICITY</h2>
                <p className='homeP'>Modern concepts from our Hamburg workshop</p>
            
            
            <Link to='/Shop'>

                    <div className='shopLink' /*onClick={changeStylesShop} */>
                        <h3 className='shopLinkText'>Catalogue</h3>
                     </div>
                
            </Link>
            </div>

            <img className='homeImage' alt='Landing page image of furniture' src='siteImages/Home.jpeg' />
            <div id ='modalBackgroundHome' onClick={homeBackgroundHandler}>
            </div>
        </div>
    )};

    function homeBackgroundHandler (e) {
        const cartPreview = document.getElementById('cartPreview')
        const modalBackground = document.getElementById('modalBackgroundHome')
    
        cartPreview.style.display = 'none'
        modalBackground.style.display = 'none'
    }

export default Home;
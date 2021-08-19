import {Link} from 'react-router-dom'
import { checkoutBackgroundHandler } from './Checkout';

function Home () {

    return (
        <div id='home' className='home'>
            <Link to='/Shop'>
                <div className='shopLinkContainer'>
                    <div className='shopLink' /*onClick={changeStylesShop} */>
                        <span className = 'shopLinkText' >Catalogue </span>
                    </div>
                </div>
            </Link>
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
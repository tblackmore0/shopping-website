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
            <div id ='modalBackground' onClick={checkoutBackgroundHandler}>
            </div>
        </div>
    )};



export default Home;
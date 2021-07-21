import {Link} from 'react-router-dom';
import PushToCart from './PushToCart';

function NavBar (props) {


return (
    <div className='navbar' id='navBar'>
            <div className='logo' id='logo' onClick={changeStylesHome}>
                <Link to='/'>
                    Jaeger.
                </Link>
            </div>
        <div className='cartDiv'>
            <img className='shoppingCart' src='siteImages/Basket.png' />
            <span className='cartNumber' onChange={console.log(props.shoppingCart)}>{props.shoppingCart.length}</span>
    </div>
    </div>
)};



function changeStylesHome () {

    document.getElementById('navBar').className='navbar'
    document.getElementById('logo').className='logo'

}
    

export default NavBar;
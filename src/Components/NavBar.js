import {Link} from 'react-router-dom';
function NavBar () {

return (
    <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    Jaeger.
                </Link>
            </div>
        <div className='cartDiv'>
            <img className='shoppingCart' src='siteImages/Basket.png' />
            <span className='cartNumber'>0</span>
    </div>
    </div>
)};

export default NavBar;
import {Link} from 'react-router-dom';
function NavBar () {

return (
    <div className='navbar' id='navBar'>
            <div className='logo' id='logo' onClick={changeStylesHome}>
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



function changeStylesHome () {

    document.getElementById('navBar').className='navbar'
    document.getElementById('logo').className='logo'

}
    

export default NavBar;
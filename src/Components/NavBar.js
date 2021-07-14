import {Link} from 'react-router-dom';
function NavBar () {

return (
    <div className='navbar'>
        <Link to='/'>
            <div className='logo'>
                Jaeger.
            </div>
        </Link>
        <div className='pageLinks'></div>
    </div>
)};

export default NavBar;
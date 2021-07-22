import {Link} from 'react-router-dom'

function Home () {

    return (
        <div className='home'>
            <Link to='/Shop'>
                <div className='shopLinkContainer'>
                    <div className='shopLink' /*onClick={changeStylesShop} */>
                        <span className = 'shopLinkText' >Catalogue </span>
                    </div>
                </div>
            </Link>
        </div>
    )};

/* function changeStylesShop () {
    document.getElementById('navBar').className='altNav'
    document.getElementById('logo').className='altLogo'

}
*/


export default Home;
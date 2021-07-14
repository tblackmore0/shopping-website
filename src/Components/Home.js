import {Link} from 'react-router-dom'

function Home () {

    return (
        <div className='home'>
            <Link to='/Shop'>
                <div className='shopLinkContainer'>
                    <div className='shopLink'>
                        <span className = 'shopLinkText' >Catalogue </span>
                    </div>
                </div>
            </Link>
        </div>
    )};
    

export default Home;
import ShopList from './ShopList'

function Shop () {


    const itemsList =  [
        {
            name: 'Stool',
            imageURL: 'itemImages/Stool.jpg',
            price: '£40',
            objectID: 0,
        },
        {
            name: 'Stand',
            imageURL: 'itemImages/Stand.jpg',
            price: '£65',
            objectID: 1,
        },
    ];


    return (
        <div className='shop'>
            <div className ='shopGrid'>
                <div className = 'shopTitle'>
                    Catalogue
                </div>
                <ShopList items={itemsList} />
            </div>
        </div>
    )};
    

export default Shop;
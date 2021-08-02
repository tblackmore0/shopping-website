import ShopList from './ShopList'
import ShopModals from './ShopModals'


const itemsList =  [
    {
        name: 'Stool',
        imageURL: 'itemImages/Stool.jpg',
        price: 40,
        objectID: 0,
        quantity: 0,
        description: 'Hi',
    },
    {
        name: 'Stand',
        imageURL: 'itemImages/Stand.jpg',
        price: 65,
        objectID: 1,
        quantity: 0,
    },
    {
        name: 'Chair',
        imageURL: 'itemImages/Chair.jpg',
        price: 50,
        objectID: 2,
        quantity: 0,
    },
    {
        name: 'Shelf',
        imageURL: 'itemImages/Shelf.jpg',
        price: 30,
        objectID: 3,
        quantity: 0,
    },
    {
        name: 'Clock',
        imageURL: 'itemImages/Clock.jpg',
        price: 30,
        objectID: 4,
        quantity: 0,
    },
    {
        name: 'Table',
        imageURL: 'itemImages/Table.jpg',
        price: 110,
        objectID: 5,
        quantity: 0,
    },
    {
        name: 'Shelf 2',
        imageURL: 'itemImages/Shelf2.jpg',
        price: 30,
        objectID: 6,
        quantity: 0,
    },
    {
        name: 'Hanger',
        imageURL: 'itemImages/HangingChair.jpg',
        price: 60,
        objectID: 7,
        quantity: 0,
    },
    {
        name: 'Table 2',
        imageURL: 'itemImages/Table2.jpg',
        price: 80,
        objectID: 8,
        quantity: 0,
    },
];


function Shop (props) {


    return (
        <div className='shop'>
            <span className = 'shopTitle'>Catalogue</span>
                <ShopList items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>
                <ShopModals items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>
            </div>
    )};



export default Shop;
export {itemsList}
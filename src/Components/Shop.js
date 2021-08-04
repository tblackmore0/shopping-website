import ShopList from './ShopList'
import ShopModals from './ShopModals'


const itemsList =  [
    {
        name: 'Stül',
        imageURL: 'itemImages/Stool.jpg',
        price: 40,
        objectID: 0,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Stande',
        imageURL: 'itemImages/Stand.jpg',
        price: 65,
        objectID: 1,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet 
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Chaer',
        imageURL: 'itemImages/Chair.jpg',
        price: 50,
        objectID: 2,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Shelve',
        imageURL: 'itemImages/Shelf.jpg',
        price: 30,
        objectID: 3,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Klök',
        imageURL: 'itemImages/Clock.jpg',
        price: 30,
        objectID: 4,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet 
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Taabel',
        imageURL: 'itemImages/Table.jpg',
        price: 110,
        objectID: 5,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet 
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Shelve II',
        imageURL: 'itemImages/Shelf2.jpg',
        price: 30,
        objectID: 6,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet 
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Hangur',
        imageURL: 'itemImages/HangingChair.jpg',
        price: 60,
        objectID: 7,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet 
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
    {
        name: 'Taabel II',
        imageURL: 'itemImages/Table2.jpg',
        price: 80,
        objectID: 8,
        quantity: 0,
        description1: `Lorem ipsum dolor sit amet
        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
        description2: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
    },
];


function Shop (props) {


    return (
        <div className='shop'>
                <ShopList items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>
                <ShopModals items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>
            </div>
    )};

export default Shop;
export {itemsList}
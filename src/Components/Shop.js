import {ShopList} from './ShopList'
import ShopModals from './ShopModals'


const itemsList =  [
    {
        name: 'Stül',
        class: 'itemCard position1',
        imageURL: 'itemImages/Stool.jpg',
        thumb: 'itemImages/StoolThumb.jpg',
        alt: 'Two wooden stools with three legs each',
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
        class: 'itemCard position2',
        imageURL: 'itemImages/Stand.jpg',
        thumb: 'itemImages/Stand.jpg',
        alt: 'A small, voided, wooden stand with four legs.',
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
        class: 'itemCard position3',
        imageURL: 'itemImages/Chair.jpg',
        thumb: 'itemImages/Chair.jpg',
        alt:'Two tall-backed wooden chairs.',
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
        class: 'itemCard position4',
        imageURL: 'itemImages/Shelf.jpg',
        thumb: 'itemImages/Shelf.jpg',
        alt: 'A plain wooden shelf with metal supports.',
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
        class: 'itemCard position5',
        imageURL: 'itemImages/Clock.jpg',
        thumb: 'itemImages/Clock.jpg',
        alt: 'A natural wooden clock with white hands and numbers.',
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
        class: 'itemCard position6',
        imageURL: 'itemImages/Table.jpg',
        thumb: 'itemImages/TableThumb.jpg',
        alt: 'A rough-finish, large wooden table with dark metal legs.',
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
        class: 'itemCard position7',
        imageURL: 'itemImages/Shelf2.jpg',
        thumb: 'itemImages/Shelf2Thumb.jpg',
        alt: 'A wooden shelf in the shape of a voided triangle.',
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
        class: 'itemCard position8',
        imageURL: 'itemImages/HangingChair.jpg',
        thumb: 'itemImages/HangingChairThumb.jpg',
        alt: 'A lounger/chair sat in wooden supports and suspended from the roof with rope.',
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
        class: 'itemCard position9',
        imageURL: 'itemImages/Table2.jpg',
        thumb: 'itemImages/Table2.jpg',
        alt: 'A set of three small, two-legged tables that fit inside one another.',
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

    setTimeout(function() {
        
    let navBar = document.getElementById('navBar');
    let logo = document.getElementById('logo');
    let shoppingC = document.getElementById('shoppingCartImg')
    let cartN = document.getElementById('cartNumber')

    shoppingC.src = ('siteImages/shopping-bag-white.png');
    cartN.style.color = ('seashell');
    logo.style.color = ('seashell');
    navBar.style.background = ('linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)');

    }, 100);

    return (
        <div className='shop'>
                <ShopList items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>
                <ShopModals items={itemsList} shoppingCart={props.shoppingCart} updateCart={props.updateCart}/>

            </div>
    )};

export default Shop;
export {itemsList}
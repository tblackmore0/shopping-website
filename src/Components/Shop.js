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
        {
            name: 'Chair',
            imageURL: 'itemImages/Chair.jpg',
            price: '£50',
            objectID: 2,
        },
        {
            name: 'Shelf',
            imageURL: 'itemImages/Shelf.jpg',
            price: '£30',
            objectID: 3,
        },
        {
            name: 'Clock',
            imageURL: 'itemImages/Clock.jpg',
            price: '£30',
            objectID: 4,
        },
        {
            name: 'Table',
            imageURL: 'itemImages/Table.jpg',
            price: '£110',
            objectID: 5,
        },
        {
            name: 'Shelf 2',
            imageURL: 'itemImages/Shelf2.jpg',
            price: '£30',
            objectID: 6,
        },
        {
            name: 'Hanging Chair',
            imageURL: 'itemImages/HangingChair.jpg',
            price: '£60',
            objectID: 7,
        },
        {
            name: 'Table 2',
            imageURL: 'itemImages/Table2.jpg',
            price: '£80',
            objectID: 8,
        },
    ];


    return (
        <div className='shop'>
            <span className = 'shopTitle'>Catalogue</span>
                <ShopList items={itemsList} />
            </div>
    )};
    

export default Shop;
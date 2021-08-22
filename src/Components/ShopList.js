import {itemsList} from './Shop'
import {ItemCard} from './ItemCard'

function ShopList (props) {

    let items = props.items;

    return (

        <div className = 'shopWindow'>
        
            <div className = 'shopGrid'>
                <ItemCard item={items[0]}/>
                <ItemCard item={items[1]}/>
                <ItemCard item={items[2]}/>
                <ItemCard item={items[3]}/>
                <ItemCard item={items[4]}/>
                <ItemCard item={items[5]}/>
                <ItemCard item={items[6]}/>
                <ItemCard item={items[7]}/>
                <ItemCard item={items[8]}/>

            </div>
        </div>

    )};


    function ShowItemModal (e) {

        const modalListArray = Array.from(document.getElementsByClassName('itemModal'))

        const ID = e.target.attributes.getNamedItem("data-key").value;

        const modalBackground = document.getElementById('modalBackground')

        const list = document.getElementById('modalList')

        list.dataset.status = 'on'

           const mappedList = modalListArray.map(function (item) {
                if (item.attributes.getNamedItem("data-key").value == ID) {
                item.style.display = 'flex';
                modalBackground.style.display = 'flex';
            } 
        })}

export {ShopList, ShowItemModal};
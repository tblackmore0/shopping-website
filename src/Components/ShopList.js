import {itemsList} from './Shop';
import {ItemCard} from './ItemCard';
import {ShopText} from './ShopText';

function ShopList (props) {

    let items = props.items;

    return (

        <div className = 'shopWindow'>
        
            <div className = 'shopGrid'>
                <div className='gridRow'>
                <ShopText class={'shopText shopText1'} title={'Sustainability'} text={'All of our wood is sourced from sustainable forests, allowing us to remain carbon neutral.'}/>
                <ItemCard item={items[0]}/>
                <ItemCard item={items[1]}/>
                </div>
                <div className='gridRow'>
                <ItemCard item={items[2]}/>
                <ItemCard item={items[3]}/>
                <ShopText class={'shopText shopText2'} title={'Uncompromising Quality'} text={'We never settle for less than perfect. If anything is wrong with your order, get in touch and we will fix it free of charge.'}/>
                <ItemCard item={items[4]}/>
                </div>
                <div className='gridRow gridRow3'>
                <ItemCard item={items[7]}/>
                <ItemCard item={items[8]}/>
                </div> <div className='gridRow'>
                <ItemCard item={items[6]}/>
                <ShopText class={'shopText shopText3'} title={'Shipping & Delivery'} text={'We are a small company with a global scope. Shipping and returns are quick, easy, and affordable.'}/>
                <ItemCard item={items[5]}/>
                </div>

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
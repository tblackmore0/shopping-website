import { ItemCard } from "./ItemCard";
import React from 'react';
import ShopModals from './ShopModals';

function TableGrid (props) {

    let items = props.items

    return (

            <React.Fragment>
                <div className='mobileGrid' id='TableGrid'>
                    <ItemCard item={items[1]}/>
                    <ItemCard item={items[5]}/>
                    <ItemCard item={items[8]}/>
                </div>

            </React.Fragment>
    )
}

export {TableGrid};
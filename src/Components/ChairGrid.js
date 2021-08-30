import { ItemCard } from "./ItemCard";
import React from 'react';
import ShopModals from './ShopModals'

function ChairGrid (props) {

    let items = props.items

    return (
                <React.Fragment>
                <div className='mobileGrid' id='ChairGrid'>
                    <ItemCard item={items[0]}/>
                    <ItemCard item={items[2]}/>
                    <ItemCard item={items[7]}/>
                </div>
                </React.Fragment>
    )
}

export {ChairGrid};
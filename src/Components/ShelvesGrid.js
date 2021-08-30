import { ItemCard } from "./ItemCard";
import React from 'react';
import ShopModals from './ShopModals';

function ShelvesGrid (props) {

    let items = props.items


    return (

                <React.Fragment>
                    <div className='mobileGrid' id='ShelvesGrid'>
                        <ItemCard item={items[3]}/>
                        <ItemCard item={items[4]}/>
                        <ItemCard item={items[6]}/>
                    </div>
                </React.Fragment>
    )
}

export {ShelvesGrid};
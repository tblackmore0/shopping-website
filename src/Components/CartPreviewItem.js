import {DeleteItem} from './CartPreview';

function CartPreviewItem (props) {

let item = props.item 
let shoppingCart = props.shoppingCart
let updateCart= props.updateCart

    
    if (props.item) {
        return (
            <div className='cartPreviewItem'>
                <div className='cartPreviewName'>
                    {props.item.name}
                </div>
                <div className='cartPreviewQuantity'>
                    x{props.item.quantity}
                </div>
                <div className ='quantityButtons'>
                    <div className ='quantityButton'>
                        <span>+</span>
                    </div>
                    <div className ='quantityButton'>
                        <span>-</span>
                    </div>
                </div>
                <div className='cartPreviewPrice'>
                    £{props.item.price*props.item.quantity} 
                </div>
                <div className='removeCartItem' onClick={(e) => DeleteItem(e,item, shoppingCart, updateCart)}>
                    X
                </div>
            </div>

    )}

    else {
        return (
        <div className='cartPreviewItem'>
        </div>

        )}}
    
    
    export default CartPreviewItem
import {DeleteItem} from './CartPreview';
import {increaseQuantity, decreaseQuantity} from './QuantityFunctions'

function CartPreviewItem (props) {


let item = props.item 
let shoppingCart = props.shoppingCart
let updateCart= props.updateCart
    
    if (props.item) {
        return (
            <div className='cartPreviewItem'>
                <div className='itemFirstSection'>
                    <div className='cartPreviewNameDiv'>
                    <div className='cartPreviewName'>
                        {props.item.name}
                    </div>
                    </div>
                    <div className='cartPreviewQuantity'>
                        x{props.item.quantity}
                    </div>
                </div>
                <div className ='quantityButtons'>
                    <div onClick={(e) => increaseQuantity(item, shoppingCart, updateCart)} className ='quantityButton'>
                        <span className='quantityTextPlus'>+</span>
                    </div>
                    <div onClick={(e) => decreaseQuantity(item, shoppingCart, updateCart)} className ='quantityButton'>
                        <span className='quantityTextMinus'>-</span>
                    </div>
                </div>
                <div className='cartPreviewPrice'>
                    £{props.item.price*props.item.quantity} 
                </div>
                <div className='removeCartItem' onClick={(e) => DeleteItem(item, shoppingCart, updateCart)}>
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
import {DeleteItem} from './CartPreview';
import {increaseQuantity, decreaseQuantity} from './QuantityFunctions'

function CartPreviewItem (props) {


let item = props.item 
let shoppingCart = props.shoppingCart
let updateCart= props.updateCart
    
    if (props.item) {
        return (
            <div className ='itemBorderDiv'>
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
                    <img src='siteImages/PlusSign.png' alt='Increase quantity button' onClick={(e) => increaseQuantity(item, shoppingCart, updateCart)} className ='quantityButton plus'/>
                    <img src='siteImages/MinusSign.png' alt='Decrease quantity button' onClick={(e) => decreaseQuantity(item, shoppingCart, updateCart)} className ='quantityButton minus'/>
                </div>
                <div className = 'endSection'>
                <div className='cartPreviewPrice'>
                    £{props.item.price*props.item.quantity} 
                </div>
                </div>
            </div>
            <img onClick={(e) => DeleteItem(item, shoppingCart, updateCart)} alt='Icon for removing cart item' src='siteImages/white-x.png' className='removeItem' />
            </div>

    )}

    else {
        return (
        <div className='cartPreviewItem'>
        </div>

        )}}
    
    
    export default CartPreviewItem
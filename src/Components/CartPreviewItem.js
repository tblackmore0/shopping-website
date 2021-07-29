import {RemoveCartItem} from './CartPreview';

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
                <div className='cartPreviewPrice'>
                    £{props.item.price}
                </div>
                <div className='removeCartItem' onClick={(e) => RemoveCartItem(e,item, shoppingCart, updateCart)}>
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
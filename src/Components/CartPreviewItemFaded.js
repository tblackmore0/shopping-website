import {RemoveCartItem} from './CartPreview';

function CartPreviewItemFaded (props) {

    
    if (props.item) {
        return (
            <div className='cartPreviewItemFaded'>
            <div className='cartPreviewName'>
                {props.item.name}
            </div>
        </div>

    )}

    else {
        return (
        <div className='cartPreviewItem'>
        </div>

        )}}
    
    
    export default CartPreviewItemFaded
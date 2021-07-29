function CartPreviewItem (props) {
    
    if (props.item) {
        return (
            <div className='cartPreviewItem'>
                <div className='cartPreviewName'>
                    {props.item.name}
                </div>
                <div className='cartPreviewPrice'>
                    £{props.item.price}
                </div>
                <div className='removeCartItem' /*onClick={removeCartItem} */>
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
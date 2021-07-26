function CartPreviewItem (props) {
    
    if (props.item) {
        return (
        <div className='cartPreviewItem'>
            {props.item.name}
        </div>

    )}

    else {
        return (
        <div className='cartPreviewItem'>
        </div>

        )}}
    
    
    export default CartPreviewItem
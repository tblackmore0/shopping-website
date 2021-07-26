function CartPreviewItemFaded (props) {
    
    if (props.item) {
        return (
        <div className='cartPreviewItemFaded'>
            {props.item.name}
        </div>

    )}

    else {
        return (
        <div className='cartPreviewItem'>
        </div>

        )}}
    
    
    export default CartPreviewItemFaded
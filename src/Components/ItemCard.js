import { ShowItemModal } from './ShopList';

function ItemCard (props) {

  let item = props.item

  return (

    <div className = 'itemCard' onClick={ShowItemModal} data-key={item.objectID} key={item.objectID}>
      <img className = 'itemImage' src={item.imageURL} alt={item.alt} data-key={item.objectID}></img>
    </div>

  )};


  export {ItemCard};
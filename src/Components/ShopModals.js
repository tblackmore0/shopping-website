function ShopModals (props) {

    return (

        <div className ='modalBackground'>
            <ul>
              {props.items.map((item) => (

              <li className = 'itemModal' key={item.objectID}>
                  <img className = 'itemImage' src={item.imageURL} alt='why not work'></img>
                  <span>{item.name}</span>
              </li>

              ))}
            </ul>
        
        </div>

    )};

    export default ShopModals
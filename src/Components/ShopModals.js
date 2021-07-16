function ShopModals (props) {

    return (

        <div id ='modalBackground'>
            <ul id='modalList'>
              {props.items.map((item) => (

              <li className = 'itemModal' data-key={item.objectID}>
                  <img className = 'itemImage' src={item.imageURL} alt='why not work'></img>
                  <span>{item.name}</span>
              </li>

              ))}
            </ul>
        
        </div>

    )};

    export default ShopModals
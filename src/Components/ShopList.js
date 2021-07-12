function ShopList (props) {


    return (

        <div className = 'shopWindow'>
        
            <ul className = 'shopGrid'>
              {props.items.map((item) => (

              <li className = 'itemCard' key={item.objectID}>
                  <img className = 'itemImage' src={item.imageURL} alt='why not work'></img>
                  <span>{item.name}</span>
            </li>

              ))}
            </ul>
        </div>

    )};


export default ShopList;
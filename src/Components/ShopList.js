//import ShowItemModal from './ShowItemModal';
function ShopList (props) {


    return (

        <div className = 'shopWindow'>
        
            <ul className = 'shopGrid'>
              {props.items.map((item) => (

              <li >
                  <div className = 'itemCard' onClick={ShowItemModal} data-key={item.objectID} key={item.objectID}>
                    <img className = 'itemImage' src={item.imageURL} alt='why not work' data-key={item.objectID}></img>
                    <span data-key={item.objectID}>{item.name}</span>
                  </div>
              </li>

              ))}
            </ul>
        </div>

    )};


    function ShowItemModal (e) {

        const ID = e.target.attributes.getNamedItem("data-key").value;
    
        console.log(ID);
    }


export default ShopList;
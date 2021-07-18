function ShopModals (props) {

    return (

        <div id ='modalBackground' onClick={hideModal}>
            <ul id='modalList'>
              {props.items.map((item) => (

              <li className = 'itemModal' data-key={item.objectID}>
                  <img className = 'modalImage' src={item.imageURL} alt='why not work'></img>
                  <span>{item.name}</span>
              </li>

              ))}
            </ul>
        
        </div>

    )};

function hideModal () {
    const modalListArray = Array.from(document.getElementsByClassName('itemModal'))
    const modalBackground = document.getElementById('modalBackground')
        modalBackground.style.display = 'none'
    
    const mappedList = modalListArray.map(function (item) {
        item.style.display = 'none'
    })


}

    export default ShopModals
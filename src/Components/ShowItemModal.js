
function ShowItemModal (e) {

    const ID = e.target.attributes.getNamedItem("data-msg").value;

    console.log(ID);
}

export default ShowItemModal
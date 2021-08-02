import { DeleteItem } from "./CartPreview"
import { AddCart } from "./NavBar"
import {cartSum} from "./CartPreview"

function increaseQuantity (item, shoppingCart, updateCart) {
    item.quantity++
    updateCart([...shoppingCart])
}

function decreaseQuantity (item, shoppingCart, updateCart) {

    let itemToDelete = item

    itemToDelete.quantity--

    if (itemToDelete.quantity < 1) {
         let newCart = shoppingCart.filter(item => item.objectID != itemToDelete.objectID )
        updateCart(shoppingCart = newCart)
    }

    else { updateCart([...shoppingCart])
}}

export {increaseQuantity, decreaseQuantity}
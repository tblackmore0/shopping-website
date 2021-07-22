
function ShowCartPreview (shoppingCart) {
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='flex';
}

function HideCartPreview () {
    let cartPreview = document.getElementById('cartPreview')
    cartPreview.style.display='none';
}

export {ShowCartPreview, HideCartPreview}
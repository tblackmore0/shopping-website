(this["webpackJsonpshopping-website"]=this["webpackJsonpshopping-website"]||[]).push([[0],{24:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),s=a(17),o=a.n(s),r=(a(24),a(19)),c=a(7),l=a(11),d=a(0);function m(e){var t=Array.from(document.getElementsByClassName("itemModal")),a=document.getElementById("modalBackground");document.getElementById("modalList").dataset.status="off",a.style.display="none";t.map((function(e){e.style.display="none"}))}function u(e){document.getElementById("cartPreview");var t=document.getElementById("modalBackground"),a=document.getElementById("navBar"),i=document.getElementById("cartDiv"),n=document.getElementById("logo");(e.target==t||e.target==n||e.target==a&&e.target!=i)&&(m(),function(e){var t=document.getElementById("modalBackground"),a=document.getElementById("cartPreview");t.style.display="none",a.style.display="none"}()),e.target==i&&m()}var p=function(e){var t=e.shoppingCart,a=e.updateCart;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("ul",{id:"modalList","data-status":"off",children:e.items.map((function(e){return Object(d.jsx)("li",{className:"itemModal","data-key":e.objectID,children:Object(d.jsxs)("div",{className:"modalWrapper",children:[Object(d.jsx)("img",{className:"modalImage",src:e.imageURL,alt:e.name}),Object(d.jsxs)("div",{className:"modalDiv",children:[Object(d.jsx)("span",{className:"modalTitle",children:e.name}),Object(d.jsxs)("div",{className:"modalTextDiv",children:[Object(d.jsx)("p",{className:"modalText",children:e.description1}),Object(d.jsx)("p",{className:"modalText",children:e.description2})]}),Object(d.jsx)("div",{className:"addToCart",children:Object(d.jsxs)("form",{className:"cartForm",onSubmit:function(e){return v(e,t,a)},"data-key":e.objectID,children:[Object(d.jsx)("input",{className:"input",type:"number",step:"1",placeholder:"1"}),Object(d.jsx)("button",{className:"addToCartButton",children:"Add to cart"})]})})]})]})})}))}),Object(d.jsx)("div",{id:"modalBackground",onClick:u})]})};function g(e){var t=e.item;return Object(d.jsx)("div",{className:"itemCard",onClick:b,"data-key":t.objectID,children:Object(d.jsx)("img",{className:"itemImage",src:t.imageURL,alt:t.alt,"data-key":t.objectID})},t.objectID)}function j(e){var t=e.items;return Object(d.jsx)("div",{className:"shopWindow",children:Object(d.jsxs)("div",{className:"shopGrid",children:[Object(d.jsx)(g,{item:t[0]}),Object(d.jsx)(g,{item:t[1]}),Object(d.jsx)(g,{item:t[2]}),Object(d.jsx)(g,{item:t[3]}),Object(d.jsx)(g,{item:t[4]}),Object(d.jsx)(g,{item:t[5]}),Object(d.jsx)(g,{item:t[6]}),Object(d.jsx)(g,{item:t[7]}),Object(d.jsx)(g,{item:t[8]})]})})}function b(e){var t=Array.from(document.getElementsByClassName("itemModal")),a=e.target.attributes.getNamedItem("data-key").value,i=document.getElementById("modalBackground");document.getElementById("modalList").dataset.status="on";t.map((function(e){e.attributes.getNamedItem("data-key").value==a&&(e.style.display="flex",i.style.display="flex")}))}var h=[{name:"St\xfcl",imageURL:"itemImages/Stool.jpg",alt:"Two wooden stools with three legs each",price:40,objectID:0,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Stande",imageURL:"itemImages/Stand.jpg",alt:"A small, voided, wooden stand with four legs.",price:65,objectID:1,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Chaer",imageURL:"itemImages/Chair.jpg",alt:"Two tall-backed wooden chairs.",price:50,objectID:2,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Shelve",imageURL:"itemImages/Shelf.jpg",alt:"A plain wooden shelf with metal supports.",price:30,objectID:3,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Kl\xf6k",imageURL:"itemImages/Clock.jpg",alt:"A natural wooden clock with white hands and numbers.",price:30,objectID:4,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Taabel",imageURL:"itemImages/Table.jpg",alt:"A rough-finish, large wooden table with dark metal legs.",price:110,objectID:5,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Shelve II",imageURL:"itemImages/Shelf2.jpg",alt:"A wooden shelf in the shape of a voided triangle.",price:30,objectID:6,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Hangur",imageURL:"itemImages/HangingChair.jpg",alt:"A lounger/chair sat in wooden supports and suspended from the roof with rope.",price:60,objectID:7,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Taabel II",imageURL:"itemImages/Table2.jpg",alt:"A set of three small, two-legged tables that fit inside one another.",price:80,objectID:8,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}];var y=function(e){return setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),a=document.getElementById("shoppingCartImg"),i=document.getElementById("cartNumber");a.src="siteImages/shopping-bag-white.png",i.style.color="seashell",t.style.color="seashell",e.style.background="linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)"}),100),Object(d.jsxs)("div",{className:"shop",children:[Object(d.jsx)(j,{items:h,shoppingCart:e.shoppingCart,updateCart:e.updateCart}),Object(d.jsx)(p,{items:h,shoppingCart:e.shoppingCart,updateCart:e.updateCart})]})};var v=function(e,t,a){e.preventDefault();var i=Number(e.target[0].value);null!==i&&void 0!==i&&0!==i||(i=1),console.log(i);var n=e.target.attributes.getNamedItem("data-key").value;h.map((function(e){e.objectID==n&&(t.includes(e)?(e.quantity+=i,a(Object(l.a)(t))):(e.quantity+=i,a(t.concat(e))))})),m(),document.getElementById("modalBackground").style.display="none"};function x(e){var t=e.shoppingCart;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsxs)("div",{className:"navbar",id:"navBar",onClick:f,children:[Object(d.jsx)("div",{className:"logo",id:"logo",children:Object(d.jsx)(c.b,{to:"/",children:Object(d.jsx)("p",{id:"logoText",className:"logoText",children:" Jaeger. "})})}),Object(d.jsxs)("div",{id:"cartDiv",className:"cartDiv",children:[Object(d.jsx)("img",{id:"shoppingCartImg",className:"shoppingCart",src:"siteImages/shopping-bag.png",alt:"shopping basket"}),Object(d.jsx)("span",{id:"cartNumber",className:"cartNumber",children:I(t)})]})]}),Object(d.jsx)("div",{id:"cartPreview",className:"cartPreviewDiv",style:{display:"none"},children:Object(d.jsx)(B,{shoppingCart:t,updateCart:e.updateCart})})]})}function I(e){return e.reduce((function(e,t){return e+t.quantity}),0)}function f(e){var t=document.getElementById("cartDiv"),a=document.getElementById("shoppingCartImg"),i=document.getElementById("cartNumber"),n=document.getElementById("cartPreview"),s=document.getElementById("checkoutPage"),o=document.getElementById("home"),r=document.getElementById("logoText");if(e.target==r)return n?void(n.style.display="none"):void 0;e.target==t||e.target==a||e.target==i||e.target==r?s||o?function(){var e=document.getElementById("cartPreview"),t=document.getElementById("modalBackground"),a=document.getElementById("modalBackgroundHome");if(document.getElementById("home"))return void("none"===e.style.display?(e.style.display="flex",a.style.display="flex"):(e.style.display="none",a.style.display="none"));"none"===e.style.display?(e.style.display="flex",t.style.display="flex"):(e.style.display="none",t.style.display="none")}():function(){var e=document.getElementById("cartPreview"),t=document.getElementById("modalBackground"),a=document.getElementById("modalBackgroundHome"),i=document.getElementById("modalList");if(document.getElementById("home"))return e.style.display="flex",void(a.style.display="flex");"on"===i.dataset.status&&("none"===e.style.display?(e.style.display="flex",t.style.display="flex"):e.style.display="none");"off"===i.dataset.status&&("none"===e.style.display?(e.style.display="flex",t.style.display="flex"):(e.style.display="none",t.style.display="none"))}():s||o?k():u(e)}var O=function(e){var t=e.item,a=e.shoppingCart,i=e.updateCart;return e.item?Object(d.jsxs)("div",{className:"itemBorderDiv",children:[Object(d.jsxs)("div",{className:"cartPreviewItem",children:[Object(d.jsxs)("div",{className:"itemFirstSection",children:[Object(d.jsx)("div",{className:"cartPreviewNameDiv",children:Object(d.jsx)("div",{className:"cartPreviewName",children:e.item.name})}),Object(d.jsxs)("div",{className:"cartPreviewQuantity",children:["x",e.item.quantity]})]}),Object(d.jsxs)("div",{className:"quantityButtons",children:[Object(d.jsx)("img",{src:"siteImages/PlusSign2.png",alt:"Increase quantity button",onClick:function(e){return function(e,t,a){e.quantity++,a(Object(l.a)(t))}(t,a,i)},className:"quantityButton plus"}),Object(d.jsx)("img",{src:"siteImages/MinusSign2.png",alt:"Decrease quantity button",onClick:function(e){return function(e,t,a){var i=e;if(i.quantity--,i.quantity<1){var n=t.filter((function(e){return e.objectID!=i.objectID}));a(t=n)}else a(Object(l.a)(t))}(t,a,i)},className:"quantityButton minus"})]}),Object(d.jsx)("div",{className:"endSection",children:Object(d.jsxs)("div",{className:"cartPreviewPrice",children:["\xa3",e.item.price*e.item.quantity]})})]}),Object(d.jsx)("img",{onClick:function(e){return function(e,t,a){var i=e;i.quantity=0;var n=t.filter((function(e){return e.objectID!=i.objectID}));a(t=n)}(t,a,i)},alt:"Icon for removing cart item",src:"siteImages/white-x.png",className:"removeItem"})]}):Object(d.jsx)("div",{className:"cartPreviewItem"})};function B(e){var t=e.shoppingCart;document.getElementById("cartItemsPreview");return t.length<1?Object(d.jsx)("div",{className:"emptyCart",children:Object(d.jsx)("span",{children:"Cart is Empty"})}):Object(d.jsxs)("div",{id:"cartItemsPreview",className:"cartItemsPreview cartItemsScroll",children:[t.map((function(a){return Object(d.jsx)(O,{updateCart:e.updateCart,shoppingCart:t,item:a})})),Object(d.jsxs)("div",{className:"previewLinks",children:[Object(d.jsx)("div",{className:"totalWrapper",children:Object(d.jsxs)("div",{className:"cartTotal",children:["\xa3",N(t)]})}),Object(d.jsx)(c.b,{to:"/checkout",updateCart:e.updateCart,shoppingCart:t,children:Object(d.jsx)("div",{className:"checkoutLink",children:"View Basket"})})]})]})}function N(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)}function q(){return function(){var e=document.getElementById("cartPreview");e&&(e.style.display="none")}(),setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),a=document.getElementById("shoppingCartImg"),i=document.getElementById("cartNumber");a.src="siteImages/shopping-bag-white.png",i.style.color="seashell",t.style.color="seashell",e.style.background="linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)"}),100),Object(d.jsxs)("div",{id:"checkoutPage",className:"checkoutPage",children:[Object(d.jsx)("div",{className:"checkoutImg"}),Object(d.jsx)(c.b,{to:"/shop",children:Object(d.jsx)("img",{id:"returnArrow",className:"returnArrow  returnArrowHover",src:"siteImages/Arrow.png",alt:"return to shop"})}),Object(d.jsx)(c.b,{to:"/shop",children:Object(d.jsx)("div",{className:"returnToShop",children:"Return to Shop"})}),Object(d.jsx)("div",{className:"infoWrapper",children:Object(d.jsx)("div",{className:"checkoutInfo",children:"Coming Soon!"})}),Object(d.jsx)("div",{id:"modalBackground",onClick:k})]})}function k(e){var t=document.getElementById("cartPreview"),a=document.getElementById("modalBackground"),i=document.getElementById("modalBackgroundHome");if(document.getElementById("home"))return t.style.display="none",void(i.style.display="none");t.style.display="none",a.style.display="none"}function C(e){var t=document.getElementById("cartPreview"),a=document.getElementById("modalBackgroundHome");t.style.display="none",a.style.display="none"}var w=function(){return setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),a=document.getElementById("shoppingCartImg"),i=document.getElementById("cartNumber");a.src="siteImages/shopping-bag.png",i.style.color="black",t.style.color="black",e.style.background="seashell"}),100),Object(d.jsxs)("div",{id:"home",className:"home",children:[Object(d.jsxs)("div",{className:"homeText",children:[Object(d.jsx)("h2",{className:"homeTitle",children:"POWERED BY SIMPLICITY"}),Object(d.jsx)("p",{className:"homeP",children:"Modern concepts from our Hamburg workshop"}),Object(d.jsx)(c.b,{to:"/Shop",children:Object(d.jsx)("div",{className:"shopLink",children:Object(d.jsx)("h3",{className:"shopLinkText",children:"Catalogue"})})})]}),Object(d.jsx)("img",{className:"homeImage",alt:"Landing page image of furniture",src:"siteImages/Home.jpeg"}),Object(d.jsx)("div",{id:"modalBackgroundHome",onClick:C})]})},E=a(2);var D=function(){var e=n.a.useState([]),t=Object(r.a)(e,2),a=t[0],i=t[1];return Object(d.jsx)(c.a,{children:Object(d.jsxs)("div",{className:"window",children:[Object(d.jsx)(x,{shoppingCart:a,updateCart:i}),Object(d.jsxs)(E.c,{children:[Object(d.jsx)(E.a,{path:"/",exact:!0,children:Object(d.jsx)(w,{})}),Object(d.jsx)(E.a,{path:"/shop",children:Object(d.jsx)(y,{shoppingCart:a,updateCart:i})}),Object(d.jsx)(E.a,{path:"/checkout",children:Object(d.jsx)(q,{shoppingCart:a,updateCart:i})})]})]})})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(D,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.d314e1a2.chunk.js.map
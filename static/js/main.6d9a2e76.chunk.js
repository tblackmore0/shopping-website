(this["webpackJsonpshopping-website"]=this["webpackJsonpshopping-website"]||[]).push([[0],{24:function(e,t,i){},34:function(e,t,i){"use strict";i.r(t);var a=i(1),n=i.n(a),s=i(17),o=i.n(s),r=(i(24),i(19)),l=i(7),c=i(11),d=i(0);function m(e){var t=Array.from(document.getElementsByClassName("itemModal")),i=document.getElementById("modalBackground");document.getElementById("modalList").dataset.status="off",i.style.display="none";t.map((function(e){e.style.display="none"}))}function u(e){document.getElementById("cartPreview");var t=document.getElementById("modalBackground"),i=document.getElementById("navBar"),a=document.getElementById("cartDiv"),n=document.getElementById("logo");(e.target==t||e.target==n||e.target==i&&e.target!=a)&&(m(),function(e){var t=document.getElementById("modalBackground"),i=document.getElementById("cartPreview");t.style.display="none",i.style.display="none"}()),e.target==a&&m()}var p=function(e){var t=e.shoppingCart,i=e.updateCart;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsx)("ul",{id:"modalList","data-status":"off",children:e.items.map((function(e){return Object(d.jsx)("li",{className:"itemModal","data-key":e.objectID,children:Object(d.jsxs)("div",{className:"modalWrapper",children:[Object(d.jsx)("img",{className:"modalImage",src:e.imageURL,alt:e.name}),Object(d.jsxs)("div",{className:"modalDiv",children:[Object(d.jsx)("span",{className:"modalTitle",children:e.name}),Object(d.jsxs)("div",{className:"modalTextDiv",children:[Object(d.jsx)("p",{className:"modalText",children:e.description1}),Object(d.jsx)("p",{className:"modalText",children:e.description2})]}),Object(d.jsx)("div",{className:"addToCart",children:Object(d.jsxs)("form",{className:"cartForm",onSubmit:function(e){return x(e,t,i)},"data-key":e.objectID,children:[Object(d.jsx)("input",{className:"input",type:"number",step:"1",placeholder:"1"}),Object(d.jsx)("button",{className:"addToCartButton",children:"Add to cart"})]})})]})]})})}))}),Object(d.jsx)("div",{id:"modalBackground",onClick:u})]})};function g(e){var t=e.item;return Object(d.jsx)("div",{className:t.class,onClick:b,"data-key":t.objectID,children:Object(d.jsx)("img",{className:"itemImage",src:t.thumb,alt:t.alt,"data-key":t.objectID})},t.objectID)}function j(e){return Object(d.jsx)("div",{className:e.class,children:Object(d.jsxs)("div",{className:"shopTextDiv",children:[Object(d.jsx)("h2",{className:"textTitle",children:e.title}),Object(d.jsx)("p",{className:"textBody",children:e.text})]})})}function h(e){var t=e.items;return Object(d.jsx)("div",{className:"shopWindow",children:Object(d.jsxs)("div",{className:"shopGrid",children:[Object(d.jsxs)("div",{className:"gridRow",children:[Object(d.jsx)(j,{class:"shopText shopText1",title:"Sustainability",text:"All of our wood is sourced from sustainable forests, allowing us to remain carbon neutral."}),Object(d.jsx)(g,{item:t[0]}),Object(d.jsx)(g,{item:t[1]})]}),Object(d.jsxs)("div",{className:"gridRow",children:[Object(d.jsx)(g,{item:t[2]}),Object(d.jsx)(g,{item:t[3]}),Object(d.jsx)(j,{class:"shopText shopText2",title:"Uncompromising Quality",text:"We never settle for less than perfect. If anything is wrong with your order, get in touch and we will fix it free of charge."}),Object(d.jsx)(g,{item:t[4]})]}),Object(d.jsxs)("div",{className:"gridRow gridRow3",children:[Object(d.jsx)(g,{item:t[5]}),Object(d.jsx)(g,{item:t[6]}),Object(d.jsx)(g,{item:t[7]})]})," ",Object(d.jsxs)("div",{className:"gridRow",children:[Object(d.jsx)(g,{item:t[8]}),Object(d.jsx)(j,{class:"shopText shopText3",title:"Shipping & Delivery",text:"We are a small company with a global scope. Shipping and returns are quick, easy, and affordable."})]})]})})}function b(e){var t=Array.from(document.getElementsByClassName("itemModal")),i=e.target.attributes.getNamedItem("data-key").value,a=document.getElementById("modalBackground");document.getElementById("modalList").dataset.status="on";t.map((function(e){e.attributes.getNamedItem("data-key").value==i&&(e.style.display="flex",a.style.display="flex")}))}var y=[{name:"St\xfcl",class:"itemCard position1",imageURL:"itemImages/Stool.jpg",thumb:"itemImages/StoolThumb.jpg",alt:"Two wooden stools with three legs each",price:40,objectID:0,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Stande",class:"itemCard position2",imageURL:"itemImages/Stand.jpg",thumb:"itemImages/Stand.jpg",alt:"A small, voided, wooden stand with four legs.",price:65,objectID:1,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Chaer",class:"itemCard position3",imageURL:"itemImages/Chair.jpg",thumb:"itemImages/Chair.jpg",alt:"Two tall-backed wooden chairs.",price:50,objectID:2,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Shelve",class:"itemCard position4",imageURL:"itemImages/Shelf.jpg",thumb:"itemImages/Shelf.jpg",alt:"A plain wooden shelf with metal supports.",price:30,objectID:3,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Kl\xf6k",class:"itemCard position5",imageURL:"itemImages/Clock.jpg",thumb:"itemImages/Clock.jpg",alt:"A natural wooden clock with white hands and numbers.",price:30,objectID:4,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Taabel",class:"itemCard position6",imageURL:"itemImages/Table.jpg",thumb:"itemImages/Table.jpg",alt:"A rough-finish, large wooden table with dark metal legs.",price:110,objectID:5,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Shelve II",class:"itemCard position7",imageURL:"itemImages/Shelf2.jpg",thumb:"itemImages/Shelf2.jpg",alt:"A wooden shelf in the shape of a voided triangle.",price:30,objectID:6,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Hangur",class:"itemCard position8",imageURL:"itemImages/HangingChair.jpg",thumb:"itemImages/HangingChair.jpg",alt:"A lounger/chair sat in wooden supports and suspended from the roof with rope.",price:60,objectID:7,quantity:0,description1:"Lorem ipsum dolor sit amet \n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."},{name:"Taabel II",class:"itemCard position9",imageURL:"itemImages/Table2.jpg",thumb:"itemImages/Table2.jpg",alt:"A set of three small, two-legged tables that fit inside one another.",price:80,objectID:8,quantity:0,description1:"Lorem ipsum dolor sit amet\n        , consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",description2:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}];var v=function(e){return setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),i=document.getElementById("shoppingCartImg"),a=document.getElementById("cartNumber");i.src="siteImages/shopping-bag-white.png",a.style.color="seashell",t.style.color="seashell",e.style.background="linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)"}),100),Object(d.jsxs)("div",{className:"shop",children:[Object(d.jsx)(h,{items:y,shoppingCart:e.shoppingCart,updateCart:e.updateCart}),Object(d.jsx)(p,{items:y,shoppingCart:e.shoppingCart,updateCart:e.updateCart})]})};var x=function(e,t,i){e.preventDefault();var a=Number(e.target[0].value);null!==a&&void 0!==a&&0!==a||(a=1),console.log(a);var n=e.target.attributes.getNamedItem("data-key").value;y.map((function(e){e.objectID==n&&(t.includes(e)?(e.quantity+=a,i(Object(c.a)(t))):(e.quantity+=a,i(t.concat(e))))})),m(),document.getElementById("modalBackground").style.display="none"};function I(e){var t=e.shoppingCart;return Object(d.jsxs)(n.a.Fragment,{children:[Object(d.jsxs)("div",{className:"navbar",id:"navBar",onClick:O,children:[Object(d.jsx)("div",{className:"logo",id:"logo",children:Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("p",{id:"logoText",className:"logoText",children:" Jaeger. "})})}),Object(d.jsxs)("div",{id:"cartDiv",className:"cartDiv",children:[Object(d.jsx)("img",{id:"shoppingCartImg",className:"shoppingCart",src:"siteImages/shopping-bag.png",alt:"shopping basket"}),Object(d.jsx)("span",{id:"cartNumber",className:"cartNumber",children:f(t)})]})]}),Object(d.jsx)("div",{id:"cartPreview",className:"cartPreviewDiv",style:{display:"none"},children:Object(d.jsx)(N,{shoppingCart:t,updateCart:e.updateCart})})]})}function f(e){return e.reduce((function(e,t){return e+t.quantity}),0)}function O(e){var t=document.getElementById("cartDiv"),i=document.getElementById("shoppingCartImg"),a=document.getElementById("cartNumber"),n=document.getElementById("cartPreview"),s=document.getElementById("checkoutPage"),o=document.getElementById("home"),r=document.getElementById("logoText");if(e.target==r)return n?void(n.style.display="none"):void 0;e.target==t||e.target==i||e.target==a||e.target==r?s||o?function(){var e=document.getElementById("cartPreview"),t=document.getElementById("modalBackground"),i=document.getElementById("modalBackgroundHome");if(document.getElementById("home"))return void("none"===e.style.display?(e.style.display="flex",i.style.display="flex"):(e.style.display="none",i.style.display="none"));"none"===e.style.display?(e.style.display="flex",t.style.display="flex"):(e.style.display="none",t.style.display="none")}():function(){var e=document.getElementById("cartPreview"),t=document.getElementById("modalBackground"),i=document.getElementById("modalBackgroundHome"),a=document.getElementById("modalList");if(document.getElementById("home"))return e.style.display="flex",void(i.style.display="flex");"on"===a.dataset.status&&("none"===e.style.display?(e.style.display="flex",t.style.display="flex"):e.style.display="none");"off"===a.dataset.status&&("none"===e.style.display?(e.style.display="flex",t.style.display="flex"):(e.style.display="none",t.style.display="none"))}():s||o?q():u(e)}var B=function(e){var t=e.item,i=e.shoppingCart,a=e.updateCart;return e.item?Object(d.jsxs)("div",{className:"itemBorderDiv",children:[Object(d.jsxs)("div",{className:"cartPreviewItem",children:[Object(d.jsxs)("div",{className:"itemFirstSection",children:[Object(d.jsx)("div",{className:"cartPreviewNameDiv",children:Object(d.jsx)("div",{className:"cartPreviewName",children:e.item.name})}),Object(d.jsxs)("div",{className:"cartPreviewQuantity",children:["x",e.item.quantity]})]}),Object(d.jsxs)("div",{className:"quantityButtons",children:[Object(d.jsx)("img",{src:"siteImages/PlusSign2.png",alt:"Increase quantity button",onClick:function(e){return function(e,t,i){e.quantity++,i(Object(c.a)(t))}(t,i,a)},className:"quantityButton plus"}),Object(d.jsx)("img",{src:"siteImages/MinusSign2.png",alt:"Decrease quantity button",onClick:function(e){return function(e,t,i){var a=e;if(a.quantity--,a.quantity<1){var n=t.filter((function(e){return e.objectID!=a.objectID}));i(t=n)}else i(Object(c.a)(t))}(t,i,a)},className:"quantityButton minus"})]}),Object(d.jsx)("div",{className:"endSection",children:Object(d.jsxs)("div",{className:"cartPreviewPrice",children:["\xa3",e.item.price*e.item.quantity]})})]}),Object(d.jsx)("img",{onClick:function(e){return function(e,t,i){var a=e;a.quantity=0;var n=t.filter((function(e){return e.objectID!=a.objectID}));i(t=n)}(t,i,a)},alt:"Icon for removing cart item",src:"siteImages/white-x.png",className:"removeItem"})]}):Object(d.jsx)("div",{className:"cartPreviewItem"})};function N(e){var t=e.shoppingCart;document.getElementById("cartItemsPreview");return t.length<1?Object(d.jsx)("div",{className:"emptyCart",children:Object(d.jsx)("span",{children:"Cart is Empty"})}):Object(d.jsxs)("div",{id:"cartItemsPreview",className:"cartItemsPreview cartItemsScroll",children:[t.map((function(i){return Object(d.jsx)(B,{updateCart:e.updateCart,shoppingCart:t,item:i})})),Object(d.jsxs)("div",{className:"previewLinks",children:[Object(d.jsx)("div",{className:"totalWrapper",children:Object(d.jsxs)("div",{className:"cartTotal",children:["\xa3",C(t)]})}),Object(d.jsx)(l.b,{to:"/checkout",updateCart:e.updateCart,shoppingCart:t,children:Object(d.jsx)("div",{className:"checkoutLink",children:"View Basket"})})]})]})}function C(e){return e.reduce((function(e,t){return e+t.price*t.quantity}),0)}function w(){return function(){var e=document.getElementById("cartPreview");e&&(e.style.display="none")}(),setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),i=document.getElementById("shoppingCartImg"),a=document.getElementById("cartNumber");i.src="siteImages/shopping-bag-white.png",a.style.color="seashell",t.style.color="seashell",e.style.background="linear-gradient(90deg, rgba(25,48,84,1) 0%, rgba(13,195,147,1) 100%)"}),100),Object(d.jsxs)("div",{id:"checkoutPage",className:"checkoutPage",children:[Object(d.jsx)("div",{className:"checkoutImg"}),Object(d.jsx)(l.b,{to:"/shop",children:Object(d.jsx)("img",{id:"returnArrow",className:"returnArrow  returnArrowHover",src:"siteImages/Arrow.png",alt:"return to shop"})}),Object(d.jsx)(l.b,{to:"/shop",children:Object(d.jsx)("div",{className:"returnToShop",children:"Return to Shop"})}),Object(d.jsx)("div",{className:"infoWrapper",children:Object(d.jsx)("div",{className:"checkoutInfo",children:"Coming Soon!"})}),Object(d.jsx)("div",{id:"modalBackground",onClick:q})]})}function q(e){var t=document.getElementById("cartPreview"),i=document.getElementById("modalBackground"),a=document.getElementById("modalBackgroundHome");if(document.getElementById("home"))return t.style.display="none",void(a.style.display="none");t.style.display="none",i.style.display="none"}function k(e){var t=document.getElementById("cartPreview"),i=document.getElementById("modalBackgroundHome");t.style.display="none",i.style.display="none"}var E=function(){return setTimeout((function(){var e=document.getElementById("navBar"),t=document.getElementById("logo"),i=document.getElementById("shoppingCartImg"),a=document.getElementById("cartNumber");i.src="siteImages/shopping-bag.png",a.style.color="black",t.style.color="black",e.style.background="seashell"}),100),Object(d.jsxs)("div",{id:"home",className:"home",children:[Object(d.jsxs)("div",{className:"homeText",children:[Object(d.jsx)("h2",{className:"homeTitle",children:"POWERED BY SIMPLICITY"}),Object(d.jsx)("p",{className:"homeP",children:"Modern concepts from our Hamburg workshop"}),Object(d.jsx)(l.b,{to:"/Shop",children:Object(d.jsx)("div",{className:"shopLink",children:Object(d.jsx)("h3",{className:"shopLinkText",children:"Catalogue"})})})]}),Object(d.jsx)("img",{className:"homeImage",alt:"Landing page image of furniture",src:"siteImages/Home.jpeg"}),Object(d.jsx)("div",{id:"modalBackgroundHome",onClick:k})]})},D=i(2);var T=function(){var e=n.a.useState([]),t=Object(r.a)(e,2),i=t[0],a=t[1];return Object(d.jsx)(l.a,{children:Object(d.jsxs)("div",{className:"window",children:[Object(d.jsx)(I,{shoppingCart:i,updateCart:a}),Object(d.jsxs)(D.c,{children:[Object(d.jsx)(D.a,{path:"/",exact:!0,children:Object(d.jsx)(E,{})}),Object(d.jsx)(D.a,{path:"/shop",children:Object(d.jsx)(v,{shoppingCart:i,updateCart:a})}),Object(d.jsx)(D.a,{path:"/checkout",children:Object(d.jsx)(w,{shoppingCart:i,updateCart:a})})]})]})})};o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(T,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.6d9a2e76.chunk.js.map
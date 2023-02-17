// cambio de cantidad de articulos ingresado por el usuario.

let minusBtn = document.querySelector('.input__minus');
let plusBtn = document.querySelector('.input__plus');
let userInput = document.querySelector('.input__number');

let userInputNumber = 0;

plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if( userInputNumber<= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber);
});

// agregar el total de productos al carrito cuando se presiona el boton ADD TO CART
const addToCartBtn = document.querySelector('.details__button');
let cartNotification = document.querySelector('.header__cart--notification');
let lastValue = parseInt(cartNotification.innerText);

addToCartBtn.addEventListener('click', ()=>{
    lastValue = lastValue + userInputNumber;

    cartNotification.innerText = lastValue;
    cartNotification.style.display = 'block';
    drawProductInModal();
    
});

//mostrar el modal con el detalle del carrito
const cartIconBtn = document.querySelector('.header__cart');
const cartModal = document.querySelector('.cart-modal');
//let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

cartIconBtn.addEventListener('click', ()=>{
    cartModal.classList.toggle('show');

    if (lastValue == 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    
    }else{
        drawProductInModal();
    }
  
}); 

// borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');
deleteProductBtn.addEventListener('click', ()=>{
    productContainer.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    lastValue = 0;
    cartNotification.innerText = lastValue;
});
}

// cambiar imagenes cuando se precione los botones flecha.
const imageContainer = document.querySelector('.gallery__image-container');
const previusGalleryBtn = document.querySelector('.gallery__previus');
const nextGalleryBtn = document.querySelector('.gallery__next');
let imageIndex = 1;

nextGalleryBtn.addEventListener('click', ()=>{
    changeNextImage(imageContainer);
})

previusGalleryBtn.addEventListener('click', ()=>{
    changePreviusImage(imageContainer);
})

//mostrar el modal de imagenes cuando hago click en la imagen principal.
const imagesModal = document.querySelector('.modal-gallery__background');

imageContainer.addEventListener('click', ()=>{
    imagesModal.style.display = 'grid';
});





//funciones 

function drawProductInModal(){
    productContainer.innerHTML = `
        <div class="cart-modal__details-container">
            <img class="cart-modal__image" src="./images/image-product-1-thumbnail.jpg" alt="">
            <div>
            <p class="cart-modal__product">Autumn Limited Edition...</p>
            <p class="cart-modal__price">$125 x3 <span>$375.00</span> </p>
            </div>
            <img class="cart-modal__delete" src="./images/icon-delete.svg" alt="delete">
        </div>
        <button class="cart-modal__chekount" >Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125 x${lastValue} <span>$${lastValue*125}.00</span>`;
}

function changeNextImage(imgcontainer){
    if(imageIndex == 4){
        imageIndex = 1;
    }else{
        imageIndex++;
    }
    imgcontainer.style.backgroundImage = `url('../ecommerce-product-page-main/images/image-product-${imageIndex}.jpg')`
}

function changePreviusImage(imgcontainer){
    if(imageIndex == 1){
        imageIndex = 4;
    }else{
        imageIndex--;
    }
    imgcontainer.style.backgroundImage = `url('../ecommerce-product-page-main/images/image-product-${imageIndex}.jpg')`
}
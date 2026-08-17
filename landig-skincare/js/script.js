const productos = [
    {
        imagen: "assets/images/producto1.webp",
        nombre: "Crema Hidratante",
        descripcion: "Una crema hidratante ideal para todo tipo de piel, que proporciona nutrición y suavidad durante todo el día.",
        precio: 60000,
        enlace: "https://www.medipiel.com.co/"
    },
    {
        imagen: "assets/images/producto2.webp",
        nombre: "Crema despigmentante",
        descripcion: "Una crema despigmentante ideal para todo tipo de piel, que proporciona nutrición y suavidad durante todo el día.",
        precio: 75000,
        enlace: "https://www.medipiel.com.co/"
    },
    {
        imagen: "assets/images/producto3.webp",
        nombre: "Gel Limpiador Facial",
        descripcion: "Un gel limpiador facial ideal para todo tipo de piel, que proporciona limpieza profunda y suavidad durante todo el día.",
        precio: 90000,
        enlace: "https://www.medipiel.com.co/"
    },
    {
        imagen: "assets/images/producto4.webp",
        nombre: "Sérum facial",
        descripcion: "Un sérum facial ideal para todo tipo de piel, que proporciona hidratación profunda y suavidad durante todo el día.",
        precio: 80000,
        enlace: "https://www.medipiel.com.co/"
    },
    {
        imagen: "assets/images/producto5.webp",
        nombre: "Protector solar facial",
        descripcion: "Un protector solar facial ideal para todo tipo de piel, que proporciona protección contra los rayos UV y suavidad durante todo el día.",
        precio: 80000,
        enlace: "https://www.medipiel.com.co/"
    },
    {
        imagen: "assets/images/producto6.webp",
        nombre: "Sérum facial",
        descripcion: "Un sérum facial ideal para todo tipo de piel, que proporciona hidratación profunda y suavidad durante todo el día.",
        precio: 80000,
        enlace: "https://www.medipiel.com.co/"
    }
]

const swiperWrapper = document.querySelector(".swiper-wrapper");

productos.forEach(producto => {
    const productElement = document.createElement("div");
    productElement.classList.add("swiper-slide");
    productElement.innerHTML = `
    <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy">
    <h3>${producto.nombre}</h3>
    <p>${producto.descripcion}</p>
    <p>$${producto.precio.toLocaleString()}</p>
    <a target="_blank" class="btn" href="${producto.enlace}">Ver Producto</a>
    `;
    swiperWrapper.appendChild(productElement);
});

const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
    },

    slidesPerView: 1,
    spaceBetween: 16,
    watchSlidesProgress: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        }
    }

});

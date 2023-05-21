import Swiper from 'swiper/bundle';
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,

    // If we need pagination
    // крапки пагінації
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
        },
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
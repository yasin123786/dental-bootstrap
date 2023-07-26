var swiper = new Swiper(".team-slider",{
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    brackpoints: {
        0: {
            sliderPerView: 1,
        },
        768: {
            sliderPerView: 2,
        },
        991: {
            sliderPerView: 3,
        }
    }
})
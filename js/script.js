const swiper = new Swiper(".swiper", {
    // Optional parameters
    slidesPerView: 4,
    initialSlide: 1,
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },

    breakpoints: {
      1920: {
        slidesPerView: 4, 
      },

      1440: {
        slidesPerView: 3, 
      },

      768: {
        slidesPerView: 3
      }
    }
}); 
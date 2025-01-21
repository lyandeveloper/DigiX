const swiper = new Swiper(".swiper", {
    autoplay: {
      delay: 5000,
    },
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
        slidesPerView: 3,
        spaceBetween: 200
      },

      425: {
        slidesPerView: 2,
        spaceBetween: 200
      },

      375: {
        slidesPerView: 1,
        centeredSlides: true
      }
    }
}); 

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .header-wrapper nav ul li a')

window.onscroll = () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight - 100;
    let id = section.getAttribute('id');
    
    if(top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector(`header .header-wrapper nav ul li a[href*=${id}]`).classList.add('active');
      })
    }
    
  })
}
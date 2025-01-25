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

function activeLinkOnScroll() {
  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header .header-wrapper nav ul li a')

  window.onscroll = () => {
    sections.forEach(section => {
      let top = window.scrollY;
      let offset = section.offsetTop - 100;
      let height = section.offsetHeight;
      let id = section.getAttribute('id');
      
      if(top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector(`header .header-wrapper nav ul li a[href*=${id}]`).classList.add('active');
        })
      }
      
    })
  }
}

function countNumber() {
  let el01 = document.getElementById('count-01');
  let el02 = document.getElementById('count-02');
  let el03 = document.getElementById('count-03');
  let el04 = document.getElementById('count-04');

  let count01 = 0;
  let count02 = 0;
  let count03 = 0;
  let count04 = 0;
 
  const interval = setInterval(() => {
    if(count01 < 200) {
      count01++;
      el01.innerHTML = `+${count01}`;
    } else {
      clearInterval(interval);
    }
  }, 5)

  const interval02 = setInterval(() => {
    if(count02 < 60) {
      count02++;
      el02.innerHTML = `+${count02}`;
    } else {
      clearInterval(interval02);
    }
  }, 10)

  const interval03 = setInterval(() => {
    if(count03 < 600) {
      count03++;
      el03.innerHTML = `+${count03}`;
    } else {
      clearInterval(interval03);
    }
  }, 0.005)

  const interval04 = setInterval(() => {
    if(count04 < 100) {
      count04++;
      el04.innerHTML = `+${count04}mil`;
    } else {
      clearInterval(interval04);
    }
  }, 15)
} 

function trigeredActionWhenSectionIsVisible() {
  // Usando IntersectionObserver para detectar quando o elemento está visível
 const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        countNumber(); // Inicia o contador
        observer.unobserve(entry.target); // Para de observar após disparar
      }
    });
  });

  // Seleciona o elemento que deseja observar
  const target = document.getElementById('metrics');
  observer.observe(target);
}
 


function main() {
  trigeredActionWhenSectionIsVisible();
  activeLinkOnScroll();
}

main();
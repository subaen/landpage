window.onscroll = () =>{
  if (window.scrollY > 40) {
    document.querySelector('header-2').classList.add('active');
  }
}


var swiper = new Swiper(".books-slider", {
  spaceBetween:10,
   loop:true,
   centeredSlides:true,
   autoplay:{
    delay: 9500,
    disableoninteraction: false,
   },
   navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
      "0": {
        slidesPerView: 1,
      },
      "768": {
        slidesPerView: 2,
      },
      "1024": {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".xu-huong-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay: {
     delay: 9500,
     disableoninteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
       2048: {
        slidesPerView: 5,
      },
       4096: {
        slidesPerView: 6,
      }
     },
   });

   var swiper = new Swiper(".noi-bat-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay: {
     delay: 9500,
     disableoninteraction: false,
    },

     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });
 
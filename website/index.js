window.onscroll = () =>{
  if (window.scrollY > 40) {
    document.querySelector('.header .header-2').classList.add('activation');
  }
  else{
    document.querySelector('.header .header-2').classList.remove('activation');
  }
}
window.onload = () =>{
  if (window.scrollY > 40) {
    document.querySelector('.header .header-2').classList.add('activation');
  }
  else{
    document.querySelector('.header .header-2').classList.remove('activation');
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
    breakpoints: {
      "0": {
        slidesPerView: 1,
      },
      "768": {
        slidesPerView: 2,
      },
      "1024": {
        slidesPerView: 3,
      }
    }
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
       "0": {
         slidesPerView: 1,
       },
       "450": {
        slidesPerView: 2,
      },
       "768": {
         slidesPerView: 3,
       }
     }
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
       "0": {
         slidesPerView: 1,
       },
       "768": {
         slidesPerView: 2,
       },
       "1024": {
         slidesPerView: 3,
       }
     }
   });
 
   var swiper = new Swiper(".review-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay: {
     delay: 9500,
     disableoninteraction: false,
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
       }
     }
   });
 
   var swiper = new Swiper(".blogs-slider", {
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay: {
     delay: 9500,
     disableoninteraction: false,
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
       }
     }
   });

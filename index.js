onscroll = () =>{

    if(scrollY > 60 ){
        document.querySelector('.navbar').classList.add('active');
    }
    else{
        document.querySelector('.navbar').classList.remove('active');
    }
}
onload = () =>{

    if(scrollY > 60 ){
        document.querySelector('.navbar').classList.add('active');
    }
    else{
        document.querySelector('.navbar').classList.remove('active');
    }
}


var swiper = new Swiper(".books-slider", {
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
     },
   });


 
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
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
    breakpoints: {
      "@0.00": {
        slidesPerView: 1,
      },
      "@0.75": {
        slidesPerView: 2,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
    },
  });
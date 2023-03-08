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
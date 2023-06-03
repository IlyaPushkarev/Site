/*///////////////////////////Menu//////////////////////////////////*/
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.navbar');
menuBtn.addEventListener('click', function(){
    menu.classList.toggle('active')

    if(menuBtn.classList.toggle('active')){
        document.body.style.overflowY = 'hidden';
    }else{
        document.body.style.overflowY = '';
    }
});
/*/////////////////////////////////////////////////////////////////*/
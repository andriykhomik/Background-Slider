const body = document.body;
const sliders = document.querySelectorAll('.slide');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
let activeSlide = 0;

setBgToBody();

rightBtn.addEventListener('click', ()=> {
    activeSlide++;
    if (activeSlide > sliders.length - 1){
        activeSlide = 0;
    }
    setActiveSlide();
    setBgToBody()
})

leftBtn.addEventListener('click', ()=> {
    activeSlide--;
    if (activeSlide < 0){
        activeSlide = sliders.length - 1;
    }
    setActiveSlide();
    setBgToBody()
})

function setBgToBody(){
    body.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}

function setActiveSlide(){
    sliders.forEach((slide, idx)=> {
        slide.classList.remove('active');

    })
    sliders[activeSlide].classList.add('active');
}

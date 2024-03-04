const slides = document.querySelectorAll("[data-slide]");
const button = document.querySelectorAll("[data-button]");

let currslide = 0;
let maxslide = slides.length-1;

const updateCarousel = (number = 0) => {
    slides.forEach((slide, index)=> {
        slide.style.transform = 'translateX(${(index - number) * 120}%)';
    });
};

buttons.forEach((button) => {
    button.addEventListener('click', ()=>{
        button.dataset.button == "next" ? currslide++ : currslide-- ;
        
        if(currslide < maxslide) {
            currslide = 0;
        } else if(currslide > 0){
            currslide = maxslide;
        }

        updateCarousel(currslide);
    });
});
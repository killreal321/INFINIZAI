const headerBg = document.querySelector('.header_main');
const pictureBg = document.querySelector('.header-pic');

headerBg.onmousemove = moveBg;
headerBg.addEventListener('mousemove', movePic);

function moveBg(event) {
    let eventMove = (event.clientX / 2000) + 54;
    headerBg.style.background = `linear-gradient(to right, #000 ${eventMove}%, #57B8FF 30%)`; 
}

function movePic(event) {
    let eventMoveX = (event.clientX / 500) + 49;
    let eventMoveY = (-event.clientY / 50) + 296;
    pictureBg.style.left = eventMoveX + '%';
    pictureBg.style.top = eventMoveY + 'px';
}

const bioLink = document.querySelectorAll('.bio-links_item');

for (let i = 0; i < bioLink.length; i++) {
    function moveTitleLeft() {
        bioLink[i].querySelector('.item_title').style.marginLeft = 25 + 'px';
        bioLink[i].querySelector('.item_title').style.transition = 0.5 + 's';
        bioLink[i].querySelector('.ico').style.transform = 'rotate(180deg)';
        bioLink[i].querySelector('.ico').style.transition = 0.5 + 's';

    }
    bioLink[i].addEventListener('mouseenter', moveTitleLeft);
}

for (let i = 0; i < bioLink.length; i++) {
    function moveTitleLeft() {
        bioLink[i].querySelector('.item_title').style.marginLeft = 0;
        bioLink[i].querySelector('.item_title').style.transition = 0.5 + 's';
        bioLink[i].querySelector('.ico').style.transform = 'rotate(0deg)';
        bioLink[i].querySelector('.ico').style.transition = 0.5 + 's';
    }
    bioLink[i].addEventListener('mouseleave', moveTitleLeft);
}



const blockFirst = document.querySelector('.blockultimate1');

function targetRotate () {
    this.querySelector('.img-target').style.transform = 'rotate(180deg)';
    this.querySelector('.img-target').style.transition= '0.5s';
};
blockFirst.onmousemove = targetRotate;

function targetRotateBack () {
    this.querySelector('.img-target').style.transform = 'rotate(0deg)';
    this.querySelector('.img-target').style.transition= '0s';
};
blockFirst.onmouseleave = targetRotateBack;



const blockSecond = document.querySelector('.blockultimate2');

function gameRotate () {
    this.querySelector('.img-game').classList.add('img-game-animation');
};
blockSecond.onmousemove = gameRotate;

function gameRotateBack () {
    this.querySelector('.img-game').classList.remove('img-game-animation');
};
blockSecond.onmouseleave = gameRotateBack;




const blockThird = document.querySelector('.blockultimate3');

function compasRotate () {
    this.querySelector('.img-compas').style.transform = 'rotate(180deg)';
    this.querySelector('.img-compas').style.transition= '0.5s';
};
blockThird.onmousemove = compasRotate;

function compasRotateBack () {
    this.querySelector('.img-compas').style.transform = 'rotate(0deg)';
    this.querySelector('.img-compas').style.transition= '0s';
};
blockThird.onmouseleave = compasRotateBack;



const sliderNext = document.querySelector('.slider-next');
const sliderInner = document.querySelector('.slider-inner');
const sliderPrev = document.querySelector('.slider-prev');

sliderNext.addEventListener('click', sliderMoveNext);

let start = 0;
let length = 196;
function sliderMoveNext() {
    start -= length;
    if(start < -196){ 
        start = 0;
    }
    sliderInner.style.left = start  + 'px';
};

sliderPrev.addEventListener('click', sliderMovePrev);

function sliderMovePrev() {
    start += length;
    if(start > 0){
        start = -196;
    }
    sliderInner.style.left = start  + 'px';
};


const scrollUp = document.querySelector('.scroll-up');

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 130){
        scrollUp.style.opacity = '1';
    }
    else if (window.pageYOffset < 130){
        scrollUp.style.opacity = '0';
    }
})


scrollUp.onclick = toScrollUp;

function toScrollUp() {
    let posY = window.pageYOffset;
    let scrollUp = posY - 20; 
    window.scrollTo(0, scrollUp);
    if (scrollUp > 0) {
        setTimeout(toScrollUp, 1)
    }
};
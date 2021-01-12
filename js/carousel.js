const projets = document.getElementById('projets');
const items = projets.querySelectorAll('img');
const itemsDescription = projets.querySelectorAll('p');
const nbSlide = items.length;
const next = document.querySelector('.right');
const previous = document.querySelector('.left');
let count = 0;

function nextSlide() {
    items[count].classList.remove('active');
    itemsDescription[count].classList.remove('active');
    
    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }

    items[count].classList.add('active');
    itemsDescription[count].classList.add('active');
}

function previousSlide() {
    items[count].classList.remove('active');
    itemsDescription[count].classList.remove('active');
    
    if (count > 0) {
        count--;
    } else {
        count = nbSlide -1;
    }

    items[count].classList.add('active');
    itemsDescription[count].classList.add('active');
}

function keyPress(e){  
    if(e.keyCode === 37){
        previousSlide();
    } else if(e.keyCode === 39){
        nextSlide();
    }
}

next.addEventListener('click', nextSlide);
previous.addEventListener('click', previousSlide);
document.addEventListener('keydown', keyPress)



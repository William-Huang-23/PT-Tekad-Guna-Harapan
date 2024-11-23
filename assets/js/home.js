/*=============== INITIALIZE DATA ===============*/
fetch("https://script.google.com/macros/s/AKfycbyIBkRbwQ4xfWaaxgEgu9E4m7iJUyhJbECs-OBeLrDkUFordRig-o96XP8N1cLsekVNaQ/exec")
.then(res => res.json())
.then(json => {
    var hashmap = {};

    json.data.forEach(element => {
        hashmap[element.variable] = element.value;
    });

    const stats1 = document.getElementById('stats-1');
    const stats2 = document.getElementById('stats-2');
    const stats3 = document.getElementById('stats-3');
    const stats4 = document.getElementById('stats-4');

    stats1.textContent = hashmap["Tahun Proyek Terawal"];
    stats2.textContent = hashmap["Total Proyek"];
    stats3.textContent = hashmap["Jumlah Karyawan"];
    stats4.textContent = hashmap["Total Pelanggan Unik"];

    console.log(hashmap)
})
.catch(error => console.error(error));

/*=============== UPDATE HEADER ===============*/
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.classList.add('scroll-hero');
    }
    else {
        header.classList.remove('scroll-hero');
    }
});

/*=============== TITLE ANIMATION ===============*/
const heroTitle = document.getElementById('hero-title');

var splitString = '';
var animationDelay = 1;

for (i = 0; i < heroTitle.textContent.length; i++) {
    splitString += `<span style="animation-delay:${animationDelay}s` + '">' + heroTitle.textContent[i] + '</span>';
    animationDelay += 0.1;
}

heroTitle.innerHTML = splitString;

/*=============== BACKGROUND ANIMATION ===============*/
const heroBackground = document.getElementById('background-container').children;

var currentBackground = 0;

setInterval(() => {
    if (currentBackground < heroBackground.length - 1) {
        heroBackground[currentBackground].classList.remove('active-background');
        heroBackground[currentBackground + 1].classList.add('active-background');

        currentBackground++;
    } else {
        heroBackground[currentBackground].classList.remove('active-background');
        heroBackground[0].classList.add('active-background');

        currentBackground = 0;
    }
}, 7500);

/*=============== SLIDER ===============*/
const sliderContainer = document.getElementById('slider-container');
const sliderButtonPrev = document.getElementById('slider-button-prev');
const sliderButtonNext = document.getElementById('slider-button-next');

let currentSlidePos = 0;

const moveSliderItem = function () {
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

// Next Slide
const nextSlide = function () {
    const slideEnd = currentSlidePos >= sliderContainer.childElementCount - 1;
    
    if (slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
}

sliderButtonNext.addEventListener("click", nextSlide);

// Previous Slide
const previousSlide = function () {
    if (currentSlidePos <= 0) {
        currentSlidePos = sliderContainer.childElementCount - 1;
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
}

sliderButtonPrev.addEventListener("click", previousSlide);

const dontHaveExtraItem = sliderContainer.childElementCount <= 1;

if (dontHaveExtraItem) {
    sliderButtonNext.style.display = "none";
    sliderButtonPrev.style.display = "none";
}
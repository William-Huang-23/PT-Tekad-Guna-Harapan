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
    const stats5 = document.getElementById('stats-5');
    const stats6 = document.getElementById('stats-6');

    stats1.textContent = hashmap["Total Proyek"];
    stats2.textContent = hashmap["Proyek Rumah"];
    stats3.textContent = hashmap["Proyek Kantor"];
    stats4.textContent = hashmap["Proyek Ruko"];
    stats5.textContent = hashmap["Proyek Cafe"];
    stats6.textContent = hashmap["Proyek Gudang"];

    console.log(hashmap)
})
.catch(error => console.error(error));

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
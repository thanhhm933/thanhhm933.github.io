const slides = document.querySelector(".slider-list").children;
const prev = document.querySelector(".slide-prev");
const next = document.querySelector(".slide-next");
const indicator = document.querySelector(".header__slider-indicator");
let index = 0;

prev.addEventListener("click", function(){
    prevSlide();
    updateCircleIndicator();
    resetTimer();
})

next.addEventListener("click", function(){
    nextSlide();
    updateCircleIndicator();
    resetTimer();
})

// creat circle indicators
function circleIndicator() {
    for(let i = 0; i < slides.length; i++) {
        const div = document.createElement("div");
            // div.innerHTML = i + 1; (hiện số 123)
            div.setAttribute("onclick", "indicateSlide(this)")
            div.id = i;
            if(i == 0) {
                div.className = "active";
            }
            indicator.appendChild(div);
    }
}
circleIndicator();

// click button
function indicateSlide(element){
    index = element.id;
    changeSlide();
    updateCircleIndicator();
    resetTimer();
}

function updateCircleIndicator() {
    for(let i = 0 ; i < indicator.children.length; i++) {
        indicator.children[i].classList.remove("active");
    }
    indicator.children[index].classList.add("active");
}
function prevSlide() {
    if(index == 0) {
        index = slides.length - 1;
    }
    else {
        index--;
    }
    changeSlide();
}

function nextSlide() {
    if(index == slides.length - 1) {
        index = 0;
    }
    else {
        index++;
    }
    
    changeSlide();
}

function changeSlide() {
    for(let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[index].classList.add("active");
}

// Auto slide
function resetTimer() {
    // when click to indicator or controls button
    // stop timer
    clearInterval(timer);
    // then started again timer 
    timer = setInterval(autoPlay, 5000);
}

function autoPlay() {
    nextSlide();
    updateCircleIndicator();
}

let timer = setInterval(autoPlay, 5000);
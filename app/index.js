import '../assets/styles/index.scss';


const navItems = [...document.querySelectorAll(".navbar__minor__items li")];

const arrowLeft = document.querySelector(".arrow-button--left");
const arrowRight = document.querySelector(".arrow-button--right");
const sliderImage = document.querySelector(".slides-view");
const sliderHeader = document.querySelector(".slides-text__header");
const sliderDescription = document.querySelector(".slides-text__desc");

const headersArray = [...document.querySelectorAll(".feature__header")];
const descriptionsArray = [...document.querySelectorAll(".feature__description")];
const featuresList = [...document.querySelectorAll(".feature")];

let currIndex = 0;
let prevIndex;
let currFeature;
let prevNavItem = 0;

function handleRightArrowClick () {
    if(currIndex+1 > headersArray.length-1) {
        currIndex = 0;
    } else {
        currIndex ++;
    }
    changeText(currIndex);
    headersArray[currFeature].classList.remove("feature__header--active");
}

function handleLeftArrowClick () {
    if(currIndex-1 < 0) {
        currIndex = headersArray.length-1;
    } else {
        currIndex --;
    }
    changeText(currIndex);
    console.log(currIndex, prevIndex)
    headersArray[currFeature].classList.remove("feature__header--active");
}

function handleFeatureClick (index) {
    prevIndex = currIndex;
    currFeature = index;
    currIndex = index;
    changeText(index);
    headersArray[prevIndex].classList.remove("feature__header--active");
    headersArray[currIndex].classList.add("feature__header--active");
}

function changeSlide (index) {
    sliderImage.style.backgroundImage = `url(../assets/images/office_${(index%3)+1}.png)`;
    sliderHeader.innerHTML = headersArray[index].textContent;
    sliderDescription.innerHTML = descriptionsArray[index].textContent;
}

function fadeOut() {
    sliderHeader.style.opacity = '0';
    sliderHeader.style.transition = '0s';
    sliderDescription.style.opacity = '0';
    sliderDescription.style.transition = '0s';
}

function fadeIn() {
    sliderHeader.style.opacity = '1';
    sliderHeader.style.transition = '0.3s';
    sliderDescription.style.opacity = '1';
    sliderDescription.style.transition = '1s';
}

function changeText(index) {
    fadeOut(index);
    changeSlide(index);
    setTimeout(fadeIn, 300);
}

function handleNavClick(index) {
    navItems[index].classList.add("nav-item-active");
    navItems[prevNavItem].classList.remove("nav-item-active");
    prevNavItem = index;
}

arrowRight.addEventListener("click", handleRightArrowClick);
arrowLeft.addEventListener("click", handleLeftArrowClick);
featuresList.forEach( (feature, index) => {
    feature.addEventListener("click", () => handleFeatureClick(index));
})

navItems.forEach( (navItem, index) => {
    navItem.addEventListener("click", () => handleNavClick(index));
})

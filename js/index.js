//PARTICLE BACKGROUND
window.onload = function() {
    Particles.init({
      selector: '.particles-background',
      maxParticles: 90,
      sizeVariations: 4,
      speed: 0.5,
      color: '#32558C',
      minDistance: 50,
      connectParticles: true
    });
};

//PROPER SCALING ON MOBILE
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

//DIVE BUTTON
const diveButton = document.querySelector('.intro__enter-btn');
diveButton.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
})

//SMOOTH SCROLLING FOR EVERY ANCHOR
const headerOffset = -100;
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        //get destination without hash
        const hrefAttr = anchor.getAttribute('href');
        const destination = document.querySelector(hrefAttr);
        const destinationPosition = destination.getBoundingClientRect().top;
        const positionEndpoint = destinationPosition + headerOffset;

        window.scrollBy({
            top: positionEndpoint,
            behavior: "smooth"
       });
    });
});

//ICON RECOLOR ON HOVER EFFECT
/*
const iconsCollection = document.getElementsByClassName('--icon-img');
const recolorAttr = '--hover-icon';

for (let icon of iconsCollection) {
    icon.addEventListener('mouseover', () => {
        icon.classList.toggle(recolorAttr);
    })
    icon.addEventListener('mouseleave', () => {
        icon.classList.toggle(recolorAttr);
    })
}
*/

//DROPDOWN NAVIGATION
const toggleDropdownNavButton = document.querySelector('.bar__menu-btn');
const dropdownContent = document.querySelector('.navigation__dropdown');
const hideAttr = '--hidden';

toggleDropdownNavButton.addEventListener('click', () => {
    dropdownContent.classList.toggle(hideAttr);
})

dropdownContent.addEventListener('mouseleave', () => {
    dropdownContent.classList.add(hideAttr);
})
//PARTICLE BACKGROUND
const particles = require('particlesjs');
window.onload = function() {
    particles.init({
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

//WOW REVEALING
const wow = require('wow.js');
new wow({
        offset: -100
}).init();

//HELLO ANIMATION
let delay = 0;
const helloChildren = document.querySelector('.text__greeting').children;
for (let child of helloChildren) {
    child.style.setProperty('animation-delay', `${delay}ms`);
    delay += 150;
};

//SCROLL TO MAIN AND ANIMATE NAV
const navName = document.querySelector('.logo__name');
const navJob = document.querySelector('.logo__job');

const scrollToMain = () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
    navName.classList.add('animate__animated', 'animate__pulse');
    navName.style.setProperty('animation-delay', '1s');
    navJob.classList.add('animate__animated', 'animate__fadeIn');
    navJob.style.setProperty('animation-delay', '.5s');
}

//DISABLE SCROLLING
const noScroll = () => window.scrollTo(0, 0);
document.body.style.overflowY = 'hidden';

//DIVE BUTTON
window.addEventListener('scroll', noScroll);
const diveButton = document.querySelector('.intro__enter-btn');
diveButton.addEventListener('click', (e) => {
    window.removeEventListener('scroll', noScroll);
    document.body.style.overflowY = 'initial';
    window.setTimeout(scrollToMain, 2000);
    e.target.classList.add('animate__hinge');
})

//DYNAMIC NAVBAR ANCHOR EFFECT
const navbar = document.querySelector('.navigation__bar');

//viewport offset
const vhOffset = (vh * 100) / 2;

//static offsets of sections
const homeOffset = document.querySelector('.home').offsetTop;
const projectsOffset = document.querySelector('.header-projects').offsetTop + vhOffset;
const contactOffset = document.querySelector('.contact').offsetTop + vhOffset;

//static anchor elements
const homeAnchor = document.querySelector('#home-bar-anchor');
const projectsAnchor = document.querySelector('#projects-bar-anchor');
const contactAnchor = document.querySelector('#contact-bar-anchor');

const measureOffsetTop = () => {
    let navbarPosY = navbar.offsetTop;
    if (navbarPosY >= homeOffset) {
        homeAnchor.classList.add('animate__headShake');
        projectsAnchor.classList.remove('animate__headShake');
        contactAnchor.classList.remove('animate__headShake');
    }
    if (navbarPosY >= projectsOffset) {
        homeAnchor.classList.remove('animate__headShake');
        projectsAnchor.classList.add('animate__headShake');
        contactAnchor.classList.remove('animate__headShake');
    }
    if (navbarPosY >= contactOffset) {
        homeAnchor.classList.remove('animate__headShake');
        projectsAnchor.classList.remove('animate__headShake');
        contactAnchor.classList.add('animate__headShake');
    }
}
window.addEventListener('scroll', measureOffsetTop);

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
const cardsCollection = document.querySelectorAll('.attributes__card');

for (let card of cardsCollection) {
    card.addEventListener('mouseover', () => {
        card.querySelector('.card__img').classList.add('animate__pulse');
    })
    card.addEventListener('mouseleave', () => {
        card.querySelector('.card__img').classList.remove('animate__pulse');
    })
}

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

dropdownContent.addEventListener('click', () => {
    dropdownContent.classList.add(hideAttr);
})
const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 0;

rightArrow.addEventListener('click', function() {
    sectionIndex = sectionIndex + 1
    slider.style.transform = 'translate(' + (sectionIndex) * -25 + ' %)';
}); 
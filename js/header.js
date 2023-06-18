const header = document.querySelector(".header");
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    const controlPos = document.querySelector('.control-header').offsetTop + document.querySelector('.control-header').offsetHeight;
    const gate = 20;

    if(scrollPos > 140) {
        header.classList.add('fixed');

        if(scrollPos > controlPos + gate) {
            header.classList.add('show-header')
        } else {
            header.classList.remove('show-header')
        }
    } else {
        header.classList.remove('fixed');
    }
}
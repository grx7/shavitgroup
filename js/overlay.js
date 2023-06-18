const overlay = document.querySelector(".product-actions");
window.addEventListener("scroll", checkScroll);
document.addEventListener("DOMContentLoaded", checkScroll);

function checkScroll() {
    let scrollPos = window.scrollY;
    const controlPos = document.querySelector('.wrapper').offsetHeight - document.querySelector('.footer').offsetHeight - screen.height;

    if(scrollPos > controlPos) {
        overlay.classList.add('hide');
    } else {
        overlay.classList.remove('hide');
    }

    console.log(scrollPos, controlPos);
}
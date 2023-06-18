const burgerMenu = document.querySelector(".header-menu-burger");

document.addEventListener('click', e => {
    if (e.target.closest('.burger-btn')) {
        e.target.closest('.burger-btn').classList.toggle('active');
        burgerMenu.classList.toggle('_opened');

        if (burgerMenu.classList.contains('_opened')) {
            document.querySelector('body').style.overflow = 'hidden';
            document.querySelector('.wrapper').style.overflow = 'hidden';
        } else {
            document.querySelector('body').style.overflow = 'visible';
            document.querySelector('.wrapper').style.overflow = 'visible';
        }
    }
})
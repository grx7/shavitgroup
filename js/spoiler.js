document.addEventListener("click", e => {
    if (e.target.closest('.spoiler')) {
        let spoiler = e.target.closest('.spoiler');

        spoiler.classList.toggle('_opened');
    }
})
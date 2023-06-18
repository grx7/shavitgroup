let questions = document.querySelectorAll('.quiz-content__section');
let images = document.querySelectorAll('.quiz-preview__image');
let quizSize = questions.length;
document.querySelector('.quiz-navigation__total-steps').textContent = quizSize;

document.addEventListener('click', e => {
    if (e.target.dataset.quiz === 'question-next') {
        let points = [...document.querySelectorAll('.quiz-content__section')];
        let activePoint = document.querySelector('.quiz-content__section_current');
        var elPos = points.indexOf(activePoint);

        questions.forEach(el => {
            el.classList.remove('quiz-content__section_current');
        })
        let nextPoint = elPos + 1;
        document.querySelector('.quiz-navigation__current-step').textContent = nextPoint + 1;

        questions[nextPoint].classList.add('quiz-content__section_current');
        images.forEach(el => {
            el.classList.remove('quiz-preview__image_current');
        })

        if (nextPoint + 1 != quizSize) {
            images[nextPoint].classList.add('quiz-preview__image_current');
        } else {
            document.querySelector('.quiz').classList.add('finish');
            document.querySelector('.main').style.height = '100%'; 
        }
    }

    if (e.target.dataset.quiz === 'question-prev') {
        document.querySelector('.quiz').classList.remove('finish');
        document.querySelector('.main').style.height = '100vh'; 

        let points = [...document.querySelectorAll('.quiz-content__section')];
        let activePoint = document.querySelector('.quiz-content__section_current');
        var elPos = points.indexOf(activePoint);

        if (elPos != 0) {
            questions.forEach(el => {
                el.classList.remove('quiz-content__section_current');
            })
            let nextPoint = elPos - 1;
            document.querySelector('.quiz-navigation__current-step').textContent = nextPoint + 1;

            questions[nextPoint].classList.add('quiz-content__section_current');

            images.forEach(el => {
                el.classList.remove('quiz-preview__image_current');
            })
            images[nextPoint].classList.add('quiz-preview__image_current');
        } else {
            window.history.back();
        }
    }
})
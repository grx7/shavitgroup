const inputValue = document.querySelector(".quiz-range__value");
const range = document.querySelector(".quiz-range__input");
const rangeProgress = document.querySelector(".quiz-range__line");

valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
rangeProgress.style.background = `linear-gradient(to right, #1A2E47 ${valPercent}%, #CECECE ${valPercent}%)`;

range.oninput = (() => {
    let value = range.value;
    inputValue.textContent = `${value}`;

    valPercent = ((range.value - range.min) / (range.max - range.min)) * 100;
    rangeProgress.style.background = `linear-gradient(to right, #1A2E47 ${valPercent}%, #CECECE ${valPercent}%)`;
});
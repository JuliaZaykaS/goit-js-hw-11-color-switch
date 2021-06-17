import colors from './colors.json';
console.log(colors);

const refs = {
    btnStartEl: document.querySelector('[data-action="start"]'),
    btnStopEl: document.querySelector('[data-action="stop"]'),
};

refs.btnStartEl.addEventListener('click', onBtnStartClick );
refs.btnStopEl.addEventListener('click', onBtnStopClick);


function changeBodyColor() {
    document.body.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

let timerId;

function onBtnStartClick() {

    // if (timerId) return;
    refs.btnStartEl.disabled = 'disabled';

    return timerId = setInterval(changeBodyColor, 1000);

};

function onBtnStopClick() {
    clearInterval(timerId);
    timerId = 0;
    refs.btnStartEl.disabled = '';


}

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

import { loadScript } from '../load.js';

let isTimerLoaded = false;

document.querySelector('.tab-buttons').addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON' || event.target.classList.contains('active')) {
        return;
    }

    if (event.target.dataset.target === 'tab-timer' && !isTimerLoaded) {
        loadScript('../js/modules/timer.js');
        isTimerLoaded = true;
    }

    document.querySelector('.tab-buttons .active').classList.remove('active');
    document.querySelector('.tab.active').classList.remove('active');

    event.target.classList.add('active');
    document.getElementById(event.target.dataset.target).classList.add('active');
});


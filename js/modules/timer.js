const btnStart = document.querySelector('.start-timer');
const btnStop = document.querySelector('.stop-timer');
const time = document.querySelector('.time');
let timer;

time.addEventListener('input', ({ target }) => {
    const { value } = target;
    if (/[^\d]/.test(value)) {
        time.value = value.substring(0, value.length - 1);
    }
});

btnStart.addEventListener('click', () => {
    if (timer) {
        clearInterval(timer);
    }

    timer = setInterval(() => {
        if (+time.value === 1) {
            clearInterval(timer);
            playAudio();
        }
        time.value = --time.value;
    }, 1000);
});

btnStop.addEventListener('click', () => {
    clearInterval(timer);
});

const myAudioElement = new Audio('../audio/timer.mp3');
document.body.append(myAudioElement);

const playAudio = () => {
    myAudioElement.play();
};

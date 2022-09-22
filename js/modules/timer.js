const btnStart = document.querySelector('.start-timer');
const btnStop = document.querySelector('.stop-timer');
const time = document.querySelector('.time');
let timer;

btnStart.addEventListener('click', () => {
    timer = setInterval(() => {
        if (+time.value === 0) {
            clearInterval(timer);
            playAudio();

            return;
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

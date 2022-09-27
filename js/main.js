import { diffDates, diffToHtml } from './modules/dateCalc.js';
import { formatError } from './utils.js';
import { initTabs } from './modules/tabs.js';
import '../scss/style.scss';

const dateCalcForm = document.getElementById('dateCalc');
const dateCalcResult = document.getElementById('datecalc_result');

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = '';
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value;
    secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(diff);
    } else {
        dateCalcResult.innerHTML = formatError('Для расчета промежутка необходимо заполнить оба поля');
    }
}

initTabs();

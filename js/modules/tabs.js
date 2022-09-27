export const initTabs = () => {
    document.querySelector('.tab-buttons').addEventListener('click', event => {
        if (event.target.tagName !== 'BUTTON' || event.target.classList.contains('active')) {
            return;
        }

        if (event.target.dataset.target === 'tab-timer') {
            import('/js/modules/timer.js');
        }

        document.querySelector('.tab-buttons .active').classList.remove('active');
        document.querySelector('.tab.active').classList.remove('active');

        event.target.classList.add('active');
        document.getElementById(event.target.dataset.target).classList.add('active');
    });
};

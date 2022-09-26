
const loadedChanks = [];

export function loadScript(url, callback) {
    if (loadedChanks.includes(url)) {
        return;
    }
    loadedChanks.push(url);
    const element = document.createElement('script');
    element.type = 'text/javascript';
    element.src = url;
    element.onload = callback;
    document.body.appendChild(element);
}

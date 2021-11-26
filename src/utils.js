import { FORM } from './variables.js';

function removeVideoPlayer() {
    const videoPlayer = document.querySelector('iframe');
    videoPlayer.remove();
}

function removeVideoList() {
    const videoList = document.querySelector('ul');
    videoList.remove();
}

function setVideoPlayerId(event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!this.contains(li)) return;
    const iframe = document.querySelector('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${li.dataset.videoId}`);
}

function setLastInputValue(inputValue) {
    FORM.dataset.lastInputValue = inputValue;
}

function clearInputValue(inputElement) {
    inputElement.value = '';
}

export { setVideoPlayerId, setLastInputValue, clearInputValue, removeVideoPlayer, removeVideoList };

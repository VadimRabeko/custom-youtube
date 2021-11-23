function setVideoPlayerId(event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!this.contains(li)) return;
    const iframe = document.querySelector('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${li.dataset.videoId}`);
}

function clearInputValue(inputElement) {
    inputElement.value = '';
}

export { setVideoPlayerId, clearInputValue };

// поменять на конкретное значение

function setVideoPlayerId(event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!this.contains(li)) return;
    const iframe = document.querySelector('iframe');
    iframe.setAttribute('src', `https://www.youtube.com/embed/${li.dataset.videoId}`);
}

export default setVideoPlayerId;

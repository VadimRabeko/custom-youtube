function setVideoPlayerId(event) {
    const li = event.target.closest('li');
    if (!li) return;
    if (!this.contains(li)) return;
    // player data === li.dataset.videoId
    console.log(li);
}

export default setVideoPlayerId;

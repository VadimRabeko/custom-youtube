function videoPlayer(data) {
    const videoPlayer = document.createElement('iframe');
    videoPlayer.setAttribute('width', '560');
    videoPlayer.setAttribute('height', '315');
    videoPlayer.setAttribute('src', `https://www.youtube.com/embed/${data.items[0].id.videoId}`);
    videoPlayer.setAttribute('title', `${data.items[0].snippet.title}`);
    videoPlayer.setAttribute('frameborder', '0');
    videoPlayer.setAttribute(
        'allow',
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    );
    videoPlayer.setAttribute('allowfullscreen', '');
    return videoPlayer;
}

export default videoPlayer;

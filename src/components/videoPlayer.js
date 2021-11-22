class VideoPlayer {
    constructor(data) {
        this.id = data.items[0].id.videoId;
        this.title = data.items[0].snippet.title;
    }

    createVideoPlayerElement(width, height) {
        const videoPlayer = document.createElement('iframe');
        videoPlayer.setAttribute('width', `${width}`);
        videoPlayer.setAttribute('height', `${height}`);
        videoPlayer.setAttribute('src', `https://www.youtube.com/embed/${this.id}`);
        videoPlayer.setAttribute('title', `${this.title}`);
        videoPlayer.setAttribute('frameborder', '0');
        videoPlayer.setAttribute(
            'allow',
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        );
        videoPlayer.setAttribute('allowfullscreen', '');
        return videoPlayer;
    }
}

export default VideoPlayer;

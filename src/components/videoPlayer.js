class VideoPlayer {
    constructor(data) {
        this.id = data.items[0].id.videoId;
        this.title = data.items[0].snippet.title;
    }

    createVideoPlayerElement(width, height) {
        const videoPlayerContainer = document.createElement('div');
        videoPlayerContainer.classList.add('container', 'd-flex', 'flex-column', 'text-center', 'p-5');
        videoPlayerContainer.style.width = '80%';

        const videoPlayer = document.createElement('iframe');
        videoPlayer.classList.add('mx-auto');
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

        const videoPlayerTitle = document.createElement('h3');
        videoPlayerTitle.innerText = this.title;

        videoPlayerContainer.append(videoPlayer);
        videoPlayerContainer.append(videoPlayerTitle);
        return videoPlayerContainer;
    }
}

export default VideoPlayer;

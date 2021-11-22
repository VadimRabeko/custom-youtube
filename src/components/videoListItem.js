class VideoListItem {
    constructor(title, logoUrl, id) {
        this.title = title;
        this.logoUrl = logoUrl;
        this.id = id;
    }

    createVideoListItemElement() {
        const listItemElement = document.createElement('li');
        listItemElement.classList.add('video_list-item');
        listItemElement.dataset.videoId = this.id;
        listItemElement.innerHTML = `<img src="${this.logoUrl}" alt="${this.title}"><p>${this.title}</p>`;
        return listItemElement;
    }
}

export default VideoListItem;

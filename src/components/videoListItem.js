class VideoListItem {
    constructor(title, logoUrl, id) {
        this.title = title;
        this.logoUrl = logoUrl;
        this.id = id;
    }

    createVideoListItemElement() {
        const listItemElement = document.createElement('li');
        listItemElement.classList.add('video_list-item');
        listItemElement.innerHTML = `${this.title}`;
        return listItemElement;
    }
}

export default VideoListItem;

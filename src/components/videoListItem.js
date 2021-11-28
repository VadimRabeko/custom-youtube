class VideoListItem {
    constructor(title, logoUrl, id) {
        this.title = title;
        this.logoUrl = logoUrl;
        this.id = id;
    }

    createVideoListItemElement() {
        const listItemElement = document.createElement('li');
        listItemElement.classList.add('list-group-item');
        listItemElement.dataset.videoId = this.id;
        listItemElement.innerHTML = `<img src="${this.logoUrl}" alt="${this.title}" width=160 heigth=120><p class='fs-6'>${this.title}</p>`;
        return listItemElement;
    }
}

export default VideoListItem;

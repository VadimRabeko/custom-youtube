import { FORM } from './variables.js';
import { nextPageRequest } from './request.js';
import VideoListItem from './components/videoListItem.js';

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

function getLastInputValue() {
    return FORM.dataset.lastInputValue;
}

function clearInputValue(inputElement) {
    inputElement.value = '';
}

function getNextPageTokenData(nextPageToken) {
    return nextPageRequest(getLastInputValue(), nextPageToken);
}

function updateVideoList(data) {
    const videoListItemArray = data.items.map(
        (item) => new VideoListItem(item.snippet.title, item.snippet.thumbnails.default.url, item.id.videoId)
    );

    const videoListItemCreateArray = videoListItemArray.map((item) => item.createVideoListItemElement());
    const videoList = document.querySelector('ul');
    videoListItemCreateArray.forEach((element) => {
        videoList.append(element);
    });
}

function updateVideoListNextPageToken(nextPageToken) {
    const videoList = document.querySelector('ul');
    videoList.dataset.nextPageToken = nextPageToken;
}

function listOnScroll(nextPageToken) {
    return function (event) {
        const listHeight = event.target.clientHeight;
        if (event.target.scrollTop > listHeight / 2) {
            getNextPageTokenData(nextPageToken)
                .then((data) => updateVideoList(data))
                .finally(updateVideoListNextPageToken(nextPageToken));
        }
    };
}

export { setVideoPlayerId, setLastInputValue, clearInputValue, listOnScroll };

// поменять на конкретное значение

import { FORM, MAX_RESULTS } from './variables.js';
import request from './request.js';
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
    return request(getLastInputValue(), nextPageToken);
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

function getVideoListNextPageToken() {
    const videoList = document.querySelector('ul');
    return videoList.dataset.nextPageToken;
}

function updateVideoListNextPageToken(nextPageToken) {
    const videoList = document.querySelector('ul');
    videoList.dataset.nextPageToken = nextPageToken;
}

function updateVideoListDataMaxResults(list) {
    list.dataset.maxResults = +list.dataset.maxResults + MAX_RESULTS;
}

function listOnScroll(event) {
    console.log(+event.target.dataset.maxResults);
    console.log(event.target.children.length);
    if (event.target.scrollTop + event.target.clientHeight >= event.target.scrollHeight - 200) {
        if (+event.target.dataset.maxResults === event.target.children.length) {
            updateVideoListDataMaxResults(event.target);
            getNextPageTokenData(getVideoListNextPageToken())
                .then((data) => {
                    updateVideoList(data);
                    updateVideoListNextPageToken(data.nextPageToken);
                })
                .catch((error) => console.log(error));
        }
    }
}

function removeVideoPlayer() {
    const videoPlayer = document.querySelector('iframe');
    videoPlayer.remove();
}

function removeVideoList() {
    const videoList = document.querySelector('ul');
    videoList.remove();
}

export { setVideoPlayerId, setLastInputValue, clearInputValue, listOnScroll, removeVideoPlayer, removeVideoList };

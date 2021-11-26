import { FORM, MAX_RESULTS } from '../variables.js';
import request from '../request.js';
import VideoListItem from './videoListItem.js';

function getLastInputValue() {
    return FORM.dataset.lastInputValue;
}

function updateVideoListDataMaxResults(list) {
    list.dataset.maxResults = +list.dataset.maxResults + MAX_RESULTS;
}

function getNextPageTokenData(nextPageToken) {
    return request(getLastInputValue(), nextPageToken);
}

function getVideoListNextPageToken() {
    const videoList = document.querySelector('ul');
    return videoList.dataset.nextPageToken;
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

function listOnScroll(event) {
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

export { listOnScroll };

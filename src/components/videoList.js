import VideoListItem from './videoListItem.js';
import { setVideoPlayerId, listOnScroll } from '../utils.js';

function videoList(data) {
    const videoListItemArray = data.items.map(
        (item) => new VideoListItem(item.snippet.title, item.snippet.thumbnails.default.url, item.id.videoId)
    );

    const videoListItemCreateArray = videoListItemArray.map((item) => item.createVideoListItemElement());

    const videoList = document.createElement('ul');
    videoList.classList.add('list-group-flush', 'overflow-auto');
    videoList.dataset.nextPageToken = data.nextPageToken;
    videoList.style.width = '20%';
    videoList.style.height = '600px';
    videoListItemCreateArray.forEach((element) => {
        videoList.append(element);
    });
    videoList.addEventListener('click', setVideoPlayerId);
    videoList.addEventListener('scroll', listOnScroll(videoList.dataset.nextPageToken));
    return videoList;
}

export default videoList;

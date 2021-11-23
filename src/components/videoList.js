import VideoListItem from './videoListItem.js';
import { setVideoPlayerId } from '../utils.js';

function videoList(data) {
    const videoListItemArray = data.items.map(
        (item) => new VideoListItem(item.snippet.title, item.snippet.thumbnails.default.url, item.id.videoId)
    );

    const videoListItemCreateArray = videoListItemArray.map((item) => item.createVideoListItemElement());

    const videoList = document.createElement('ul');
    videoList.classList.add('list-group-flush');
    videoList.style.width = '20%';
    videoListItemCreateArray.forEach((element) => {
        videoList.append(element);
    });
    videoList.addEventListener('click', setVideoPlayerId);
    return videoList;
}

export default videoList;

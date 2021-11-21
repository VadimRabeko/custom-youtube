import VideoListItem from './videoListItem.js';

function createVideoList(data) {
    const videoListItemArray = data.items.map(
        (item) => new VideoListItem(item.snippet.title, item.snippet.thumbnails.default.url, item.id.videoId)
    );

    console.log(videoListItemArray);

    const videoListItemCreateArray = videoListItemArray.map((item) => item.createVideoListItemElement());

    const videoList = document.createElement('ul');
    videoList.classList.add('video_list');
    videoListItemCreateArray.forEach((element) => {
        videoList.append(element);
    });

    console.log(videoList);
    return videoList;
}

export default createVideoList;

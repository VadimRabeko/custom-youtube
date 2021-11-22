import { API_KEY, MAX_RESULTS, INPUT, SUBMIT_BUTTON, FORM } from '/src/variables.js';
import videoList from './components/videoList.js';
import videoPlayer from './components/videoPlayer.js';

async function getData(inputValue) {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&q=${inputValue}&maxResults=${MAX_RESULTS}`
    );
    const data = await response.json();
    return data;
}

function showVideo(iframe) {
    FORM.append(iframe);
}

function showList(ul) {
    FORM.append(ul);
}

function onSubmit(event) {
    event.preventDefault();
    const inputValue = INPUT.value;

    getData(inputValue).then((data) => {
        showVideo(videoPlayer(data));
        showList(videoList(data));
    });
}

SUBMIT_BUTTON.addEventListener('click', onSubmit);

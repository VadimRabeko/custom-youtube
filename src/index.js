import { INPUT, SUBMIT_BUTTON, FORM } from '../src/variables.js';
import { setLastInputValue, clearInputValue, removeVideoPlayer, removeVideoList } from './utils.js';
import request from './request.js';
import videoList from './components/videoList.js';
import VideoPlayer from './components/videoPlayer.js';

function formOnSubmit(event) {
    event.preventDefault();
    if (document.querySelector('iframe') || document.querySelector('ul')) {
        removeVideoPlayer();
        removeVideoList();
    }
    const inputValue = INPUT.value;
    request(inputValue)
        .finally(setLastInputValue(inputValue), clearInputValue(INPUT))
        .catch((error) => console.log(error))
        .then((data) => {
            FORM.after(videoList(data));
            FORM.after(new VideoPlayer(data).createVideoPlayerElement(520, 360));
        });
}

SUBMIT_BUTTON.addEventListener('click', formOnSubmit);

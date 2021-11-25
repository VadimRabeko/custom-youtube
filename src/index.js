import { INPUT, SUBMIT_BUTTON, FORM } from '../src/variables.js';
import { setLastInputValue, clearInputValue } from './utils.js';
import request from './request.js';
import videoList from './components/videoList.js';
import VideoPlayer from './components/videoPlayer.js';

function formOnSubmit(event) {
    event.preventDefault();
    const inputValue = INPUT.value;

    request(inputValue)
        .finally(setLastInputValue(inputValue), clearInputValue(INPUT))
        .catch((error) => console.log(error)) // обработчик ошибки
        .then((data) => {
            FORM.after(videoList(data));
            FORM.after(new VideoPlayer(data).createVideoPlayerElement(560, 320));
        });
}

SUBMIT_BUTTON.addEventListener('click', formOnSubmit);

import { INPUT, SUBMIT_BUTTON, FORM } from '../src/variables.js';
import request from './request.js';
import videoList from './components/videoList.js';
import VideoPlayer from './components/videoPlayer.js';

function formOnSubmit(event) {
    event.preventDefault();
    const inputValue = INPUT.value;

    request(inputValue)
        .catch((error) => console.log(error)) // обработчик ошибки
        .then((data) => {
            FORM.append(new VideoPlayer(data).createVideoPlayerElement(560, 320));
            FORM.append(videoList(data));
        });
}

SUBMIT_BUTTON.addEventListener('click', formOnSubmit);

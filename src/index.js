import { API_KEY, MAX_RESULTS, INPUT, SUBMIT_BUTTON, FORM } from '/src/variables.js';

async function getData(inputValue) {
    const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&q=${inputValue}&maxResults=${MAX_RESULTS}`
    );
    const data = await response.json();
    console.log(data);
    return data;
}

function showVideo(data) {
    FORM.insertAdjacentHTML(
        'afterend',
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
}

function showList(data) {}

function onSubmit(event) {
    event.preventDefault();
    const inputValue = INPUT.value;
    console.log(
        getData(inputValue).then((data) => {
            showVideo(data);
            showList(data);
        })
    );
}

SUBMIT_BUTTON.addEventListener('click', onSubmit);

// функции: 1 получает значение импута, 2 отправляет запрос на сервер и возвращает ответ дату, 3 выводит видео, 4 выводит список

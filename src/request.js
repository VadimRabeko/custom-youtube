import { API_KEY, MAX_RESULTS } from '../src/variables.js';

async function request(inputValue, nextPageToken) {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&q=${inputValue}&maxResults=${MAX_RESULTS}`;
    if (nextPageToken) {
        url += `&pageToken=${nextPageToken}`;
    }
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default request;

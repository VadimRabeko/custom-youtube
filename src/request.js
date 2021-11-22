import { API_KEY, MAX_RESULTS } from '../src/variables.js';

async function request(inputValue) {
    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${API_KEY}&type=video&q=${inputValue}&maxResults=${MAX_RESULTS}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default request;

import axios from 'axios';

const giphyApi = axios.create({
    baseURL: 'http://api.giphy.com/v1',
    params: {
        api_key: '4CLydWVgN5ipduT0Jt9a03FuFR1sYrHY',
        limit: 10
    }
})

export default giphyApi;
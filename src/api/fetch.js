import axios from 'axios';

export const apiFetchImages = ({ query = '', page = 1 } = {}) => {
  const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
  const BASE_URL = "https://pixabay.com/api/";

  return axios.get(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
    .then(response => response.data.hits);
};




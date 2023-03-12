import axios from 'axios';

export async function fetchImages(query, page = 1) {
  const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
  const BASE_URL = "https://pixabay.com/api/";

  const response = await axios.get(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`);
  return response.data;
  // const responseData = await response.data.hits;
  // return responseData;
};


// export default function fetchImages(query, page = 1) {
//         const KEY = "32997902-3b59b8944b64f8408d8a5fafd";
//         const BASE_URL = "https://pixabay.com/api/";

//     return fetch(`${BASE_URL}?key=${KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${page}`)
//         .then(res => res.json());
//         // .then(console.log);
//       // .then(data => this.setState({ data }))
//       // .finally(() => this.setState({loading: false}));
// };

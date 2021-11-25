import axios from 'axios';
import pageOption from './page_option';

// my_key: 21692932-2d6497f32a8ca8a26a2f2fcb6

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '21692932-2d6497f32a8ca8a26a2f2fcb6';

axios.defaults.baseURL = BASE_URL;

const getImage = async value => {
  const queryOptions = new URLSearchParams({
    key: API_KEY,
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: pageOption.maxImg,
    page: pageOption.page,
  });

  const { data } = await axios.get('?' + queryOptions.toString());
  return data;
};

export default getImage;

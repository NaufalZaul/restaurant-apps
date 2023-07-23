const API_CONFIG = {
  NAME_APPS: 'restaurant-apps',
  BASE_URL: 'https://restaurant-api.dicoding.dev/list',
  BASE_IMAGE_URL: 'https://restaurant-api.dicoding.dev/images/',
  GET_DETAIL_URL(id) {
    return `https://restaurant-api.dicoding.dev/detail/${id}`;
  },
};

export default API_CONFIG;

import API_CONFIG from './API';

const getSource = {
  async listRestaurant() {
    const result = await fetch(API_CONFIG.BASE_URL)
      .then((res) => res.json())
      .then((res) => res.restaurants);
    return result;
  },

  async detailRestaurant(id) {
    const result = await fetch(API_CONFIG.GET_DETAIL_URL(id))
      .then((res) => res.json())
      .then((res) => res.restaurant);
    return result;
  },
};

export default getSource;

import 'regenerator-runtime';
import getSource from '../api/fetchAPI';
import useStorageIndexedDB from '../libraries/storage/indexedDB';
import cardDetail, { allDataMenu, Reviews } from './cardDetails';

const buttonAction = {
  buttonDetailContent() {
    const button = document.querySelectorAll('.card-list');
    button.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.detailContent(e.currentTarget.id);
      });
    });
  },
  async detailContent(target) {
    const data = await getSource.detailRestaurant(target);
    const main = document.querySelector('#main');
    main.innerHTML = cardDetail(data);
    allDataMenu(data);
    Reviews(data);
    this.addFavorite(data);
  },
  async addFavorite(target) {
    const buttonFavorite = document.querySelector('.favorite');
    const getData = await useStorageIndexedDB.getSpesificDataIDB(target.id);

    if (getData !== undefined) {
      buttonFavorite.classList.add('favorite-active');
    }

    buttonFavorite.addEventListener('click', (e) => {
      e.currentTarget.classList.toggle('favorite-active');
      if (getData === undefined) {
        return useStorageIndexedDB.addDataIDB(target);
      }
      return useStorageIndexedDB.deleteSpesificDataIDB(target.id);
    });
  },
};

export default buttonAction;

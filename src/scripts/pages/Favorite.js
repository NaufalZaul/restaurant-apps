import button from '../components/button';
import cardList from '../components/cardList';
import useStorageIndexedDB from '../libraries/storage/indexedDB';

class Favorite {
  static dataListFromIDB = async () => {
    const content = document.querySelector('.content');
    const data = await useStorageIndexedDB.getAllDataIDB();
    if (content !== null) {
      data.forEach(async (element) => {
        const dataElement = await useStorageIndexedDB.getSpesificDataIDB(element);
        content.innerHTML += cardList(dataElement);
        button.buttonDetailContent();
      });
    }
  };

  static renderFavoritePage() {
    return `
      <h1 class="title-content">Restaurant Favorite</h1>
      <div class="content list"></div>
    `;
  }
}
export default Favorite;

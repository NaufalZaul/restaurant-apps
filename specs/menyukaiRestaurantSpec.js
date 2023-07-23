import useStorageIndexedDB from "../src/scripts/libraries/storage/indexedDB";

// import buttonAction from "../src/scripts/components/button";


// id:rqdv5juczeskfw1e867

describe('Like a restaurant', () => {

  const dataId = 'rqdv5juczeskfw1e867';

  const buttonLikeRestaurant = (id) => {
    document.body.innerHTML = `
      <button type="button" class="favorite" value=${id}>
        <i class="fas fa-star"></i>
      </button>`;
  };

  beforeEach(() => {
    buttonLikeRestaurant(dataId);
  });

  it('display the like button when the restaurant list is displayed',
    async () => {
      expect(document.querySelector('.favorite')).toBeTruthy();
    });

  it('does`t display the dislike button when the restaurant list is displayed',
    async () => {
      expect(document.querySelector('.favorite-active')).toBeFalsy()
    });

  it('pressing the like button',
    async () => {

      useStorageIndexedDB.addDataIDB({ id: dataId })

      document.querySelector('.favorite').dispatchEvent(new Event('click'));

      const dataRestaurant = await useStorageIndexedDB.getSpesificDataIDB(dataId);

      expect(dataRestaurant).toEqual({ id: dataId });

      useStorageIndexedDB.deleteSpesificDataIDB(dataId);
    });

  it('the restaurant is already favored',
    async () => {

      useStorageIndexedDB.addDataIDB({ id: dataId })

      document.querySelector('.favorite').dispatchEvent(new Event('click'));

      expect(await useStorageIndexedDB.getAllDataIDB()).toEqual([dataId])

      useStorageIndexedDB.deleteSpesificDataIDB(dataId);
    })
})
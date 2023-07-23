import useStorageIndexedDB from "../src/scripts/libraries/storage/indexedDB";

describe('Like a restaurant', () => {

  const dataId = 'rqdv5juczeskfw1e867';

  const buttonLikeRestaurant = (id) => {
    document.body.innerHTML = `
      <button type="button" class="favorite" value=${id}>
        <i class="fas fa-star"></i>
      </button>`;
  };

  beforeEach(async () => {
    buttonLikeRestaurant(dataId);
    await useStorageIndexedDB.addDataIDB({ id: dataId })
  });

  afterEach(async () => {
    await useStorageIndexedDB.deleteSpesificDataIDB(dataId)
  })

  it('display the like button when the restaurant list is displayed',
    async () => {
      expect(document.querySelector('.favorite')).toBeTruthy();
    });

  it('does`t display the dislike button when the restaurant list is displayed',
    async () => {
      expect(document.querySelector('.favorite-active')).toBeFalsy()
    });

  it('remove restaurant from favorite list',
    async () => {

      document.querySelector('.favorite').dispatchEvent(new Event('click'));

      await useStorageIndexedDB.deleteSpesificDataIDB(dataId)

      expect(await useStorageIndexedDB.getAllDataIDB()).toEqual([])
    });

  it('canceling the favor of the restaurant',
    async () => {
      await useStorageIndexedDB.deleteSpesificDataIDB(dataId)

      document.querySelector('.favorite').dispatchEvent(new Event('click'));

      expect(await useStorageIndexedDB.getAllDataIDB()).toEqual([])
    })
})
import { openDB } from 'idb';
import API_CONFIG from '../../api/API';

const databaseIDB = openDB(API_CONFIG.NAME_APPS, 1, {
  upgrade(db) {
    db.createObjectStore('restaurant', {
      keyPath: 'id',
      autoIncrement: true,
    });
  },
});

const useStorageIndexedDB = {
  async addDataIDB(data) {
    return (await databaseIDB).add('restaurant', data);
  },
  async getAllDataIDB() {
    return (await databaseIDB).getAllKeys('restaurant');
  },
  async getSpesificDataIDB(id) {
    return (await databaseIDB).get('restaurant', id);
  },
  async deleteSpesificDataIDB(id) {
    return (await databaseIDB).delete('restaurant', id);
  },

};
export default useStorageIndexedDB;

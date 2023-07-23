import API_CONFIG from '../../api/API';

const cacheMethod = {
  async openCache() {
    return caches.open(API_CONFIG.NAME_APPS);
  },
  async cacheDataAPI(req) {
    const cache = await this.openCache();
    return cache.addAll(req);
  },
  async deleteDataCache() {
    const dataCache = await caches.keys();
    dataCache
      .filter((name) => name !== API_CONFIG.NAME_APPS)
      .map((filter) => caches.delete(filter));
  },
  async updateDataCache(req) {
    const res = await caches.match(req);

    if (res) {
      this.fetchData(req);
      return res;
    }
    return this.fetchData(req);
  },
  async addDataCache(req) {
    const allCache = await this.openCache();
    allCache.add(req);
  },
  async fetchData(req) {
    const res = await fetch(req);

    if (!res || res.status !== 200) {
      return res;
    }
    await this.addDataCache(req);
    return res;
  },
};

export default cacheMethod;

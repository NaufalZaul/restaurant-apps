import cacheMethod from '../cache/cacheMethod';

const dataAssets = [
  './',
  './app.webmanifest',
  './icon.png',
  './images/heros/hero-image_1.jpg',
  './images/heros/hero-image_2.jpg',
  './images/heros/hero-image_2_small.jpg',
  './images/heros/hero-image_3.jpg',
  './images/heros/hero-image_4.jpg',
  './images/logo/icons8-endomondo-old-logo-48.png',
  './images/logo/icons8-endomondo-old-logo-96.png',
  './images/logo/icons8-endomondo-old-logo-144.png',
  './images/logo/icons8-endomondo-old-logo-192.png',
  './images/logo/icons8-endomondo-old-logo-240.png',
  './images/logo/icons8-endomondo-old-logo-480.png',
  './index.html',
  './app.bundle.js',
  './serviceWorker.bundle.js',
];

self.addEventListener('install', (event) => {
  event.waitUntil(cacheMethod.cacheDataAPI(dataAssets));
});
self.addEventListener('activate', (event) => {
  event.waitUntil(cacheMethod.deleteDataCache());
});
self.addEventListener('fetch', (event) => {
  event.respondWith(cacheMethod.updateDataCache(event.request));
});

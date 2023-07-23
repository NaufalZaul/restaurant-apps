import * as WorkboxWindow from 'workbox-window';

/* eslint-disable */
const swReg = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log("Service worker can't registration in your browser");
    return;
  }

  const wb = new WorkboxWindow.Workbox('./serviceWorker.bundle.js');

  try {
    await wb.register()
    console.log('Service worker registration success');
  } catch (error) {
    console.error('Registration failed:', error);
  }
};

export default swReg;

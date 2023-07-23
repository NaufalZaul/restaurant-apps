import 'regenerator-runtime'; /* for async await transpile */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import '../styles/main.css';
import App from './App';
import swReg from './libraries/serviceWorker/swReg';

const app = new App({
  navigation: document.querySelectorAll('nav a'),
  content: document.querySelector('#main'),
});
window.addEventListener('hashchange', () => {
  app.rendering();
  App.activateDropdownMenu();
});
window.addEventListener('load', () => {
  app.rendering();
  swReg();
});

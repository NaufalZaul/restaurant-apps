import Favorite from './pages/Favorite';
import Home from './pages/Home';

class App {
  constructor({
    navigation,
    content,
  }) {
    this.nav = navigation;
    this.content = content;
    this.router = '#home';
    this.rendering();
    this.switchMenu();
    // this.activateDropdownMenu();
  }

  rendering() {
    const jumbotron = document.querySelector('header');
    jumbotron.style.display = 'block';
    if (this.router === '#favorite') {
      this.content.innerHTML = Favorite.renderFavoritePage();
      Favorite.dataListFromIDB();
    } else if (this.router === '#home') {
      this.content.innerHTML = Home.renderHomePage();
      Home.getDataList();
    }
  }

  switchMenu() {
    this.nav.forEach((element) => {
      element.addEventListener('click', (e) => {
        this.router = e.currentTarget.href
          .split(`${window.location.origin}/`)
          .slice(1)
          .toString();
      });
    });
  }

  static activateDropdownMenu() {
    const menuButton = document.querySelector('.nav-menu-btn');
    const navigation = document.querySelector('.navigation');
    menuButton.addEventListener('click', () => {
      navigation.classList.toggle('show');
    });
  }
}

export default App;

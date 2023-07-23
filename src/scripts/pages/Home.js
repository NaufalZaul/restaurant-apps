import getSource from '../api/fetchAPI';
import button from '../components/button';
import cardList from '../components/cardList';

class Home {
  static getDataList = async () => {
    const content = document.querySelector('.content');
    const data = await getSource.listRestaurant();
    if (content !== null) {
      data.map((element) => {
        content.innerHTML += cardList(element);
        button.buttonDetailContent();
        return content;
      });
    }
  };

  static renderHomePage() {
    return `
      <h1 class="title-content">Restaurant List</h1>
      <div class="content list"></div>
    `;
  }
}
export default Home;

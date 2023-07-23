import '../../styles/cardDetail.css';

export const allDataMenu = ({ menus }) => {
  const foodsElement = document.querySelector('.foods');
  const drinksElement = document.querySelector('.drinks');
  menus.foods.map((item) => {
    foodsElement.innerHTML += `<li>${item.name}</li>`;
    return foodsElement;
  });
  menus.drinks.map((item) => {
    drinksElement.innerHTML += `<li>${item.name}</li>`;
    return drinksElement;
  });
};

export const Reviews = ({ customerReviews }) => {
  const reviews = document.querySelector('.reviews');
  customerReviews.map((item) => {
    reviews.innerHTML += `
      <div class="box-review">
        <div class="head-box">
          <h5>${item.name}</h5>
          <h5>${item.date}</h5>
        </div>
        <p>${item.review}</p>
      </div>
    `;
    return reviews;
  });
};

const cardDetail = ({
  id,
  address,
  categories,
  city,
  description,
  name,
  pictureId,
  rating,
}) => {
  const jumbotron = document.querySelector('header');
  jumbotron.style.display = 'none';
  return `
  <div class="about-restaurant">
    <div class="header_content_detail">
      <a href="#home" class="back">
        <i class="fas fa-chevron-left"></i>
       <h2>Restaurant Information</h2>
      </a>
      <button type="button" class="favorite" value=${id} >
        <i class="fas fa-star"></i>
      </button>
    </div>
    <div class="control-image">
      <picture>
        <source class="lazyload" media="(max-width: 600px)" 
          data-srcset="https://restaurant-api.dicoding.dev/images/small/${pictureId}" type="image/webp">
        <source class="lazyload" media="(max-width: 600px)" 
          data-srcset="https://restaurant-api.dicoding.dev/images/small/${pictureId}" type="image/jpeg">
        <source class="lazyload" media="(max-width: 900px)" 
          data-srcset="https://restaurant-api.dicoding.dev/images/medium/${pictureId}" type="image/webp">
        <source class="lazyload" media="(max-width: 900px)" 
          data-srcset="https://restaurant-api.dicoding.dev/images/medium/${pictureId}" type="image/jpeg">
        <img class="lazyload" 
          data-src="https://restaurant-api.dicoding.dev/images/large/${pictureId}" crossorigin="anonymous" alt="">
      </picture>
    </div>

    <div class="detail-restaurant">
      <div class="info">
        <h1>Restaurant ${name}</h1>
        <p>${description}</p>

        <div class="box-info-detail">
          <div class="address">
            <i class="fas fa-map-marker-alt"></i>
            <p>Address</p>
            <span>${address}, ${city}</span>
          </div>
          
          <div class="rate">
            <i class="fas fa-star"></i>
            <p>Rating</p>
            <span>${rating}</span>
          </div>
            
          <div class="category">
            <i class="fas fa-th-list"></i>
            <p>Categories</p>
            <span> ${categories.map((e) => (` ${e.name}`))}</span>
          </div>
        </div>
        
        <div class="menu">
          <span>
            <h2>Available Foods</h2>
            <ul class="foods"></ul>
          </span>
          <span>
            <h2>Available Drinks</h2>
            <ul class="drinks"></ul>          
          </span>
        </div>
      </div>  
              
      <div class="comment-review">
        <h1>Reviews</h1>
        <div class="reviews"></div>
      </div>  
    </div>
  </div>
  `;
};

export default cardDetail;

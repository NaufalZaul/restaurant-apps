import '../../styles/cardList.css';

export default function cardList({
  city, rating, description, id, name, pictureId,
}) {
  return `
    <a href="#detail" class="card-list" id=${id}>
      <div class="list-img">
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
      <div class="description">
        <p id="city">
          <i class="fas fa-map-marker-alt"></i>
          ${city}
        </p>
        <p id="name">${name}</p>
        <p id="desc">${description.substring(0, 140)}...</p>
      </div>
      <div class="rate-list">
        <i class="fas fa-star"></i>
        ${rating}
      </div>
    </a>
  `;
}

const assert = require('assert');

Feature('Menyukai Sebuah Restaurant');

Before(({ I }) => {
  I.amOnPage('/')
})

Scenario('restaurant favorit masih kosong', async ({ I }) => {

  I.seeElement('.content');

  I.waitForElement('.description #name', 2)
  I.seeElement('.description #name');

  const restaurantLiked = locate('.description #name').first();
  const restaurantLikedElement = await I.grabTextFrom(restaurantLiked);
  I.click(restaurantLiked)

  I.waitForElement('.favorite', 2)
  I.seeElement('.favorite');
  I.click(locate('.favorite'))

  I.amOnPage('/#favorite')
  I.waitForElement('.description #name', 2)
  I.seeElement('.description #name');
  const restaurantFavoriteElement = await I.grabTextFrom(locate('.description #name').first())

  assert.strictEqual(restaurantLikedElement, restaurantFavoriteElement)
});

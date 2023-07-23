Feature('Batal Menyukai Sebuah Restaurant');

Before(async ({ I }) => {
  I.amOnPage('/#favorite')
})


Scenario('restaurant favorite sudah ada', async ({ I }) => {

  I.waitForElement('.description #name', 2);
  I.seeElement('.description #name');
  I.click(locate('.description #name').first())

  I.waitForElement('.favorite', 2);
  I.seeElement('.favorite');
  I.click(locate('.favorite').first())

  I.amOnPage('/#favorite')
  I.seeElement('.description #name');
  const restaurantDisbl = await I.grabTextFrom(locate('.description #name').first())
  I.waitToHide(restaurantDisbl, 2)
  I.dontSeeElement(restaurantDisbl)
})
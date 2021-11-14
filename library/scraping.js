const axios = require('axios');
const cheerio = require('cheerio');

// Flipkart product details
const getDetails = async () => {
  try {
    const siteUrl =
      'https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off';

    const { data } = await axios({
      method: 'GET',
      url: siteUrl,
    });

    const $ = cheerio.load(data);
    const elemSelector =
      '#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2)> div';

    const keys = ['title', 'price', 'final_price', 'offer', 'imgUrl', 'rating'];
    const prodArr = [];

    $(elemSelector).each((i, element) => {
      if (i >= 1 && i <= 10) {
        let keyIdx = 0;
        const prodObj = {};
        // product name
        prodObj[keys[keyIdx++]] = $(element).find('div._4rR01T').text();
        // product price
        $(element)
          .find('div._25b18c')
          .children()
          .each((i, childElem) => {
            prodObj[keys[keyIdx++]] = $(childElem).text();
          });
        // product image
        $(element)
          .find('div.CXW8mj')
          .children()
          .each((i, imgElem) => {
            prodObj[keys[keyIdx++]] = $(imgElem).attr('src');
          });

        // product rating
        prodObj[keys[keyIdx++]] = $(element).find('div._3LWZlK').text();

        // pushing it into an array
        prodArr.push(prodObj);
      }
    });
    return prodArr;
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getDetails,
};

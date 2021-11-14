var express = require('express');
var router = express.Router();
const { dbUrl, mongodb, MongoClient } = require('../dbConfig');
const { getDetails } = require('../library/scraping');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) => {
  res.send({ message: 'Job created successfully' });
});

router.post('/add-details-flipkart', async (req, res) => {
  const client = await MongoClient.connect(dbUrl);

  try {
    const content = await getDetails();
    const db = client.db('webScrappingEcommerce');
    let data = await db
      .collection('flipkartProductDetails')
      .insertMany(content);
    res.send({
      message: 'OK',
      details: data,
    });
  } catch (e) {
    console.log(e);
    res.send({
      message: 'Error in connection',
    });
  } finally {
    client.close();
  }
});

module.exports = router;

const request = require('supertest');
const debug = require('debug')('upexample:mock:cars');
const MyApp = require('../app');

const apiPath = '/services';

let x = 1000000;


const getRandomBrand = () => ({
  name: `Brand ${x}`,
  description: `Description example number ${x}`,
  logo: 'https://static1.squarespace.com/static/592496ecd210b8c4b9bca801/t/5b027cb78a922d8cab1ed9e6/1526889655997/brand+identity+icon+256.png',
});


const generateCars = async (up) => {
  if (x < 1) {
    console.info('End all');
    process.exit(0);
  }
  x -= 1;
  try {
    await runInsert(up, 'brands', getRandomBrand(x));
  } catch (err) {
    console.error('Falta Error: ', err);
  }
};


async function runInsert(up, module, data = {}) {
  request(up.app)
    .put(`${apiPath}/${module}`)
    .send(data)
    .set('Accept', 'application/json')
    .expect(200)
    .end((err, res) => {
      if (err) {
        console.error('error: already exists: ', data);
      } else {
        debug(res.body);
      }
      generateCars(up);
    });
}

const initTest = (up) => {
  setTimeout(async () => {
    console.info('running');
    generateCars(up);
  }, 1000);
};

MyApp(initTest);

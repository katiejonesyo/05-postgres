require('dotenv').config();
const request = require('supertest');
const app = require('../index');

describe('tests frog', () => {
  it('POST and GET ', async() => {
    const response = await request(app)
      .post('/frog')
      .send({"frog": "jim", "cuteness": "v cute"});

    await expect(response.body).toEqual({
      "cuteness": "v cute",
      "frog": "jim",
      "id": "anything",
    })
  });


  // it('PUTs', async() => {
  //   .put('/frog')
  //   .send({});

  //   await expect(response.body).toEqual({});
  // });

  // it('DELETEs', async() => {
  //   .delete('/frog')
  //   .send({});
  // });
});
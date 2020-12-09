require('dotenv').config();
const fs = require('fs');
const request = require("supertest");
const app = require("../index.js");
const pool = require('../utils/pool.js');
const Frog = require('../models/Frog')



describe("app routes", () => {

  let frog;
  beforeEach( async () => {
    await pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));
    frog = await Frog
    .insert({
      frog: "jim",
      cuteness: "v cute",
      })
  });

  afterAll(() => {
    return pool.end();
  });



  test("POST frogs", async () => {
    const post = {
    frog: "jim",
    cuteness: "v cute",
    };
    const expectation = {
      cuteness: "v cute",
      frog: "jim",
      id: "2",
   
    };
    const data = await request(app)
      .post("/frog")
      .send(post)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("GET all frog", async () => {
    const expectation = [
      {
        cuteness: "v cute",
        frog: "jim",
        id: "1",
      }
    ];

    const data = await request(app)
      .get("/frog")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("GET frog by id", async () => {
    const expectation = {
      cuteness: "v cute",
      frog: "jim",
      id: "1"
     
    };

    const data = await request(app)
      .get("/frog/1")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("PUT frog", async () => {
    const update = {
      id: frog.id,
      frog: "jim",
      cuteness: "v cute"
    };

    const expectation = {
      id: "1",
      frog: "jim",
      cuteness: "v cute"
    };

    const id = 1;

    const data = await request(app)
      .put(`/frog/${frog.id}`)
      .send(update)
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("DELETE frog", async () => {
    const id = 10
    const expectation = 
      {
        cuteness: "v cute",
        frog: "jim",
        id: "1"
      };
  
    const data = await request(app)
      .delete(`/frog/1`)
      .expect("Content-Type", /json/)
      .expect(200);

    const frog = await request(app)
      .get("/frog")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });
});
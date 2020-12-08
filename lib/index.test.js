const fakeRequest = require("supertest");
const app = require("../index.js");

describe("app routes", () => {
  test("POST frog", async () => {
    const expectation = "";

    const data = await fakeRequest(app)
      .post("/frog")
      .send(expectation[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("GET frog", async () => {
    const expectation = "";

    const data = await fakeRequest(app)
      .get("/frog")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("PUT frog", async () => {
    const expectation = "";
    const update = "";
    const id = "";

    const data = await fakeRequest(app)
      .put(`/frog/${id}`)
      .send(update[0])
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual(expectation);
  });

  test("DELETE frog", async () => {
    const id = "";
    const num = 0;

    const data = await fakeRequest(app)
      .put(`/frog/${id}`)
      .expect("Content-Type", /json/)
      .expect(200);

    const colors = await fakeRequest(app)
      .get("/frog/")
      .expect("Content-Type", /json/)
      .expect(200);

    expect(data.body).toEqual("");
    expect(frog.body.length).toEqual(num);
  });
});
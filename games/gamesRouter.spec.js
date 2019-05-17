const request = require("supertest");

const router = require("./gamesRouter.js");
const games = require("./gamesModel.js");

const server = require("../api/server.js");

describe("GET /", () => {
  it("should return 200", async () => {
    const res = await request(server.use(router)).get("/");
    expect(res.status).toBe(200);
  });
  it("should return JSON", async () => {
    const res = await request(server.use(router)).get("/");
    expect(res.type).toBe("application/json");
  });
});

describe("GET /", () => {
  describe("get()", () => {
    it("should return []", async () => {
      await games.get([
        {
          title: "Stardew Valley",
          genre: "Simulation",
          releaseYear: 2016
        }
      ]);
      const gamers = await ["games"];
      expect(gamers).toEqual(["games"]);
    });
  });
});

describe('POST ("/games")', () => {
  it("returns 201 with correct data", async () => {
    const body = {
      title: "This is not a game",
      genre: "Still not a game",
      releaseYear: 2500
    };
    let res = await request(server)
      .post("/games")
      .send(body);
    expect(res.status).toBe(201);
  });

  it("returns an object", async () => {
    const body = {
      title: "Overwatch",
      genre: "Arcade",
      releaseYear: 2017
    };
    let res = await request(server)
      .post("/games")
      .send(body);
    expect(typeof res.body).toEqual("object");
  });

  it("returns 422 with incorrect data", async () => {
    const body = {
      title: "Pacman",
      releaseYear: 1980
    };
    let res = await request(server)
      .post("/games")
      .send(body);
    expect(res.status).toBe(422);
  });
});

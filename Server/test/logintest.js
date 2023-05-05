
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../index.js";

chai.should();
chai.use(chaiHttp);

describe("Tasks API", () => {
  // test the GET route

  describe("GET /user", () => {
    it("it should get all the tasks", async () => {
      const response = await chai.request(server).get("/user");
      response.should.have.status(200);
      response.body.should.be.a("array");
    });
  });

  describe("POST /auth/login", () => {
    it("login testing", async () => {
      const loga = {
        username: "viraatm",
        password: "Viraat@123",
      };
      const res = await chai
        .request(server)
        .post("/auth/login")
        .send({ username: loga.username, password: loga.password });

      res.should.have.status(200);
      res.body.should.be.a("object");
    });
  });
});

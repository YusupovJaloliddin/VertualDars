const jwt = require("jsonwebtoken");
require("dotenv").config();
const { User } = require("../../../models/user");
describe("user.generateAuthoken", () => {
  it("should return valid jsonwebtoken", () => {
    const user = new User({ isAdmin: true });
    const token = user.generateAuthToken();
    const decodedObject = jwt.verify(token, process.env.JWTPRIMARIYKEY);
    expect(decodedObject).toMatchObject({ isAdmin: true });
  });
});

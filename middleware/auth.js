const jwt = require("jsonwebtoken");
require("dotenv").config();
function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    return res
      .status(401)
      .json(`Token bolmaganligi sababli murojaat rad etildi`);
  }

  try {
    const decoded = jwt.verify(token, process.env.JWTPRIMARIYKEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json(`Yaroqsz token`);
  }
}
module.exports = auth;

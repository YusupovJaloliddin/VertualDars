module.exports = function Admin(req, res, next) {
  if (!req.user.isAdmin) {
    res.status(403).json("Murojaat rad etildi");
  }
  next();
};

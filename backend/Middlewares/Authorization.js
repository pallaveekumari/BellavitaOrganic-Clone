const jwt = require("jsonwebtoken");

const authorisation = async (req, res, next) => {
  if (!req.headers.authorization) {
    res.status(400).json({ msg: "NOT AUTHORISED PLEASE LOGIN" });
  }
  const token = req.headers.authorization?.split(" ")[1];
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      res.status(400).json({ msg: "NOT AUTHORISED PLEASE LOGIN" });
    } else {
      req.body.userId = decoded.userId;
      next();
    }
  });
};

module.exports = {
  authorisation,
};
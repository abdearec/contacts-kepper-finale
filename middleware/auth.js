const jwt = require("jsonwebtoken");
const config = require("config");
module.exports = (req, res, next) => {
  //Get token from header
  const token = req.header("x-auth-token");
  // check if not token
  if (!token) {
    console.log("token : " + token);
    return res.status(401).json({ msg: "Auth denied !!!!!!!" });
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtsecret"));
    req.user = decoded.user;

    next();
  } catch (err) {
    res.status(401).json({ msg: "Token is not valid !!!!!!!" });
  }
};

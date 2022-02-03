const jwt = require("jsonwebtoken");
const verify = async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  try {
    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
      req.user = token;
      next();
    }
  } catch (error) {
    res.status(401).json({
      msg: "error",
    });
  }
};
module.exports = verify;

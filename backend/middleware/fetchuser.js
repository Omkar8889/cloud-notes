const jwt = require("jsonwebtoken");
const jwtSecreat = "myscreatkey"; //---this should be imported from separate config file

const fetchuser = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
  try {
    const data = jwt.verify(token, jwtSecreat);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "please authenticate using valid token" });
  }
};

module.exports = fetchuser;

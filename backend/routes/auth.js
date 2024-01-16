const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const jwtSecreat = "myscreatkey"; //---this should be imported from separate config file
//Route 1-- create user using post request on http://localhost:5000/api/auth/createuser  /login not  required
router.post(
  "/createuser",
  // validate user information
  [
    body("email", "enter valid email").isEmail(),
    body("password", "enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // send error if error in user data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // try to send user as responce
    try {
      // search for existing user with same email
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "user with this email alredy exists" });
      }

      // password hashing
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      // creating new user
      user = await User.create({
        email: req.body.email,
        password: hash,
      });
      const data = {
        user: { id: user.id },
      };
      const authToken = jwt.sign(data, jwtSecreat);
      res.send({ authToken });
    } catch (error) {
      //catching error other then existing email
      console.log(error);
      res.status(500).json({ error: "some error" });
    }
  }
);

//Route 2-- user login using request on http://localhost:5000/api/auth/login  /login not  required
router.post(
  "/login",
  // validate user information
  [
    body("email", "enter valid email").isEmail(),
    body("password", "password can not be blank").exists(),
  ],
  async (req, res) => {
    // send error if error in user data
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res
          .status(400)
          .json({ error: "please enter correct credentials" });
      }
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res
          .status(400)
          .json({ error: "please enter correct credentials" });
      }
      const data = {
        user: { id: user.id },
      };
      const authToken = jwt.sign(data, jwtSecreat);
      console.log("user foung", user);
      res.send({ authToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "internal server error" });
    }
  }
);
// Route 3-- authenticate user login using request on http://localhost:5000/api/auth/getuser  /login required
router.post("/getuser", fetchuser, async (req, res) => {

  try {
    // get user id
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;

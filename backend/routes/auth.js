const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const jwtSecreat='myscreatkey';//---this should be imported from separate config file

router.post(
  "/createuser",
  // validate user information
  [
    body("email", "enter valid email").isEmail(),
    body("name", "emter valid name").isLength({ min: 3 }),
    body("password", "enter valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    console.log(req.body);//---delete this line after done with usser data collection
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
      const salt =bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      // creating new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hash,
      });
      const data={
        user:{id:user.id}
      }
      const authToken = jwt.sign(data, jwtSecreat);
      res.send({authToken});
    } catch (error) {
      //catching error other then existing email
      console.log(error);
      res.status(500).json({ error: "some error" });
    }
  }
);
module.exports = router;
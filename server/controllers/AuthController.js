const db = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const saltRounds = 10;
const register = (req, res) => {
  const hash = bcrypt.hashSync(req.body.password.toString(), saltRounds);
  db.users
    .create({
      name: req.body.name,
      email: req.body.email,
      password: hash,
      avatar: req.body.avatar,
      address: req.body.address,
      date: req.body.date,
    })
    .then(() => {
      let token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
        expiresIn: "1h",
      });
      res.status(201).json({
        user,
        message: "Registered successful",
        token,
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

const login = (req, res) => {
  const { email, password } = req.body;
  db.users
    .findOne({
      where: {
        email,
      },
    })
    .then((user) => {
      if (user && bcrypt.compareSync(password.toString(), user.password)) {
        let token = jwt.sign({ user: user }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        res.status(200).json({
          user,
          message: "Auth successful",
          token,
        });
      }
    })
    .catch((err) => {
      if (err instanceof NotFoundError) {
        res.status(401).send(`Mobile/Email or Password is wrong`);
      } else {
        let error_data = {
          entity: "User",
          model_obj: { param: req.params, body: req.body },
          error_obj: err,
          error_msg: err.message,
        };
        res.status(500).send("Error retrieving User");
      }
    });
};

module.exports = {
  register,
  login,
};

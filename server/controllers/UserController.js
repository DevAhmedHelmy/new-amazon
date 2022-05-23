const db = require("../models");
const User = db.users;
const bcrypt = require("bcrypt");
const saltRounds = 10;

// create new user
const addUser = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password.toString(), saltRounds);
    let user = {
      name: req.body.name,
      email: req.body.email,
      password: hash,
      avatar: req.body.avatar,
      address: req.body.address,
      date: req.body.date,
    };

    const newUser = await User.create(user);
    res.status(201).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

// get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

// get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// update user by id
const updateUserById = async (req, res) => {
  try {
    const user = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// delete user by id
const deleteUserById = async (req, res) => {
  try {
    const user = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

// export all functions
module.exports = {
  addUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // create a schema
// const userSchema = new Schema({
//     name: String,
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     avatar: String,
//     address:{type:Schema.Types.ObjectId, ref:"Address"},
//     date: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("User", userSchema);

// const mysql = require('mysql')
// const Schema = mysql.Schema;
// const userSchema = new Schema({
//   name: String,
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   avatar: String,
//   address: String,
//   date: { type: Date, default: Date.now },
// });

// module.exports = mysql.model("User", userSchema);

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      avatar: DataTypes.STRING,
      address: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      timestamps: false,
    }
  );
  User.associate = function (models) {
    User.hasMany(models.Address, {
      foreignKey: "userId",
      as: "addresses",
    });
  };
  return User;
}

 
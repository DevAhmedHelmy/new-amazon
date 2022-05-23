module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "user",
    {
      name: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: { type: DataTypes.STRING },
      avatar: { type: DataTypes.STRING },
      address: { type: DataTypes.STRING },
    },
    {
      timestamps: true,
    }
  );

  return User;
};

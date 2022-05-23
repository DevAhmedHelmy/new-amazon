module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "categories",
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      timestamps: true,
    }
  );
    
    Category.associate = function (models) {
        Category.hasMany(models.Product, {
            allowNull: false,
        });
    };

  return Category;
};

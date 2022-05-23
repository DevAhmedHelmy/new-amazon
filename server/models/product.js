const Category = require("./category");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.FLOAT,
        image: DataTypes.STRING,  
        categoryId:
        {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'categories',
                key: "id",
            },
        },
    },
    {
      timestamps: true,
    }
  );
//    relationship with category
    Product.associate =  (models) =>{ 
        Product.belongsTo(models.category, {
            foreignKey: { name: "categoryId" },
            onDelete: "CASCADE",
        });
    };
  return Product;
};

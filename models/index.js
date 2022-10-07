// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// association methods to create relationships between models
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'Category_id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'Category_id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: {
    model: ProductTag,
    foreignKey: 'Product_id',
    unique: false
  }
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: {
    model: ProductTag,
    foreignKey: 'Tag_id',
    unique: false
  }
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

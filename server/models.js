const { cos } = require('@tensorflow/tfjs');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', '3Q2G8WwNkXDPB8k.root', 'XssU3JLwr5dPmVES', {
  host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
  port: 4000,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true
    }
  }
});

const Restaurant = sequelize.define('Restaurant', {
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  alias: DataTypes.STRING,
  name: DataTypes.STRING,
  image_url: DataTypes.STRING,
  is_closed: DataTypes.BOOLEAN,
  url: DataTypes.STRING,
  review_count: DataTypes.INTEGER,
  rating: DataTypes.INTEGER,
  coordinates: DataTypes.JSON,
  transactions: DataTypes.JSON,
  price: DataTypes.STRING,
  location: DataTypes.JSON,
  phone: DataTypes.STRING,
  display_phone: DataTypes.STRING,
  distance: DataTypes.DOUBLE,
  averageCalorie: DataTypes.DOUBLE,
  averageTotalFat: DataTypes.DOUBLE,
  averageTotalProtien: DataTypes.DOUBLE,
  averageTotalCarbohydrates: DataTypes.DOUBLE
}, {
  timestamps: false
});

const Category = sequelize.define('Category', {
  alias: DataTypes.STRING,
  title: DataTypes.STRING,
  restaurant_id: {
    type: DataTypes.STRING,
    references: {
      model: Restaurant,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

const Menu = sequelize.define('Menu', {
  food: DataTypes.STRING,
  ingredients: DataTypes.STRING,
  imgSrc: DataTypes.STRING,
  calorie: DataTypes.DOUBLE,
  restaurant_id: {
    type: DataTypes.STRING,
    references: {
      model: Restaurant,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

const Ingredient = sequelize.define('Ingredient', {
  name: DataTypes.STRING,
  calories: DataTypes.DOUBLE,
  serving_size_g: DataTypes.DOUBLE,
  fat_total_g: DataTypes.DOUBLE,
  fat_saturated_g: DataTypes.DOUBLE,
  protein_g: DataTypes.DOUBLE,
  sodium_mg: DataTypes.DOUBLE,
  potassium_mg: DataTypes.DOUBLE,
  cholesterol_mg: DataTypes.DOUBLE,
  carbohydrates_total_g: DataTypes.DOUBLE,
  fiber_g: DataTypes.DOUBLE,
  sugar_g: DataTypes.DOUBLE,
  menu_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Menu,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

const Review = sequelize.define('Review', {
  username: DataTypes.STRING,
  review: DataTypes.TEXT,
  restaurant_id: {
    type: DataTypes.STRING,
    references: {
      model: Restaurant,
      key: 'id'
    }
  }
}, {
  timestamps: false
});

// Create mappings between table
Restaurant.hasMany(Menu, { foreignKey: 'restaurant_id', as: 'menus' });
Menu.belongsTo(Restaurant, { foreignKey: 'restaurant_id' });
// In sync (for init)
// sequelize.sync()
//   .then(() => console.log('Database & tables created!'))
//   .catch(error => console.log('This error occurred', error));

// Get add resturant id

const getAllRestaurantID = async() => {
  try {
    const restaurants = await Restaurant.findAll({
      attributes: ['id'] 
    });
    
    const ids = restaurants.map(restaurant => restaurant.id);
    
    console.log(ids);
    return ids;
    
  } catch (error) {
    console.error('Error retrieving restaurants:', error);
  }
}

module.exports = { sequelize, Restaurant, Category, Menu, Ingredient, Review, getAllRestaurantID };
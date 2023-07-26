const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('test', '4119qweDVJzJujk.root', '5ITiwv2Te7OO5J7s', {
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
  restaurant_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  average_calorie: DataTypes.INTEGER,
  latitude: DataTypes.STRING,
  longitude: DataTypes.STRING,
  rating: DataTypes.INTEGER,
  review: DataTypes.STRING,
  category: DataTypes.STRING,
  distance: DataTypes.STRING,
  displayAddress: DataTypes.STRING,
  imageURL: DataTypes.STRING,
  reviewCount: DataTypes.STRING,
  phone: DataTypes.STRING,
  transactions: DataTypes.STRING,
}, {
  timestamps: false,
});

const Menu = sequelize.define('Menu', {
  restaurant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Restaurant,
      key: 'restaurant_id',
    },
  },
  dish_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  calorie: DataTypes.INTEGER,
  price: DataTypes.DECIMAL(5, 2),
  img_url: DataTypes.STRING,
}, {
  timestamps: false,
});

const Ingredient = sequelize.define('Ingredient', {
  dish_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Menu,
      key: 'dish_id',
    },
  },
  name: DataTypes.STRING,
  calorie: DataTypes.INTEGER,
  serving_size: DataTypes.INTEGER,
  fat_total: DataTypes.DECIMAL(4, 1),
  protein: DataTypes.DECIMAL(4, 1),
}, {
  timestamps: false,
});

const Review = sequelize.define('Review', {
  review_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  restaurant_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Restaurant,
      key: 'restaurant_id',
    },
  },
  text: DataTypes.STRING(500),
  rating: DataTypes.INTEGER,
}, {
  timestamps: false,
});

sequelize.sync()
  .then(() => console.log('Tables created successfully'))
  .catch((error) => console.log('Error creating tables: ', error));
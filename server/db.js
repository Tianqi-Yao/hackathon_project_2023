var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'gateway01.eu-central-1.prod.aws.tidbcloud.com',
  port: 4000,
  user: '4119qweDVJzJujk.root',
  password: '5ITiwv2Te7OO5J7s',
  database: 'test',
  ssl: {
    minVersion: 'TLSv1.2',
    rejectUnauthorized: true
  }
});

connection.connect(function(err) {
  if (err) {
    throw err
  }

  // Create restaurant table
  connection.query(`
    CREATE TABLE IF NOT EXISTS restaurant (
      restaurant_id INT PRIMARY KEY,
      name VARCHAR(255),
      average_calorie INT,
      latitude VARCHAR(255),
      longitude VARCHAR(255),
      rating INT,
      review VARCHAR(255),
      category VARCHAR(255),
      distance VARCHAR(255),
      displayAddress VARCHAR(255),
      imageURL VARCHAR(255),
      reviewCount VARCHAR(255)
    );
  `, function(err) {
    if (err) throw err;

    console.log("Restaurant table created");
  });

  // Create menu table
  connection.query(`
    CREATE TABLE IF NOT EXISTS menu (
      restaurant_id INT,
      dish_id INT PRIMARY KEY,
      calorie INT,
      price INT,
      img_url VARCHAR(255),
      rating INT,
      review VARCHAR(255),
      FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id)
    );
  `, function(err) {
    if (err) throw err;

    console.log("Menu table created");
  });

  // Create ingredients table
  connection.query(`
    CREATE TABLE IF NOT EXISTS ingredients (
      dish_id INT,
      name VARCHAR(255),
      calorie INT,
      FOREIGN KEY (dish_id) REFERENCES menu(dish_id)
    );
  `, function(err) {
    if (err) throw err;

    console.log("Ingredients table created");
  });

  connection.end();
});
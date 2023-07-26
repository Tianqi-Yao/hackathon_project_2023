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

// We will need to drop some tables first,
// On reserve order from the down to the top
connection.query(`
DROP TABLE IF EXISTS ingredients;
`, function(err) {
if (err) throw err;

console.log("Ingredients table dropped");
});

connection.query(`
DROP TABLE IF EXISTS menu;
`, function(err) {
if (err) throw err;

console.log("Menu table dropped");
});

connection.query(`
    DROP TABLE IF EXISTS restaurant;
`, function(err) {
    if (err) throw err;

    console.log("Restaurant table dropped");
});

connection.end();
});
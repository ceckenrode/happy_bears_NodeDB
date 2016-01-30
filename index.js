var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bears_db'
});
 
connection.connect();
 
connection.query('SELECT * FROM happy_bears', function(err, rows, fields) {
  if (err) throw err;
 
  for (var i = 0; i < rows.length; i++) {
    console.log(rows[i].name + "'s favorite food is " + rows[i].favorite_food + " and he has a " + rows[i].personality + " personality type.");
  };
});
 
connection.end();
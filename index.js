var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'bears_db'
});

connection.connect();

var showBears = function() {
  connection.query('SELECT * FROM happy_bears', function(err, rows, fields) {
    if (err) throw err;

    for (var i = 0; i < rows.length; i++) {
      console.log(rows[i].name + "'s favorite food is " + rows[i].favorite_food + " and he has a " + rows[i].personality + " personality type.");
    };
  });
}

var addBears = function(){
  connection.query("INSERT INTO happy_bears (name, favorite_food, personality) VALUES (?,?,?)", ["Smoky", "Steak", "Bruh"], function(err, results){
    if (err) throw err;
    console.log("~Insert Finished!");
  })
}

//addBears();
//
var deleteBear = function(){
  var query = "DELETE FROM happy_bears WHERE id =?";
  var idToBeDeleted = process.argv[2];

  connection.query(query, idToBeDeleted, function(err, results){
    if (err) throw err;

    console.log("Bear " + idToBeDeleted + " was deleted.");
  });
}

deleteBear();
showBears();




connection.end();

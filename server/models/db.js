const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'tikation'
  });

// open the MySQL connection
// connection.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });
//close the MySQL connection
// connection.end(function(err) {
//     if (err) {
//       return console.log('error:' + err.message);
//     }
//     console.log('Close the database connection.');
//   });



pool.getConnection(function(err, connection) {
    
  
    // Use the connection
    
  // if (err) throw err;
  // console.log("Connected!");
  // con.query("CREATE DATABASE tikation", function (err, result) {
  //   // if (err) throw err;
  //   console.log("Database created");
  // });
  connection.connect(error => {
    if (error) throw error;
    console.log("Successfully connected to the database.");
  });
  
});
 

module.exports = pool;
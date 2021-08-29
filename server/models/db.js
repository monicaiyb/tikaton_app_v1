const mysql = require("mysql");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    // database : 'databasename'
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
    if (err) throw err; // not connected!
  
    // Use the connection
    connection.query('SELECT something FROM sometable', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
  
      // Handle error after the release.
      if (error) throw error;
  
      // Don't use the connection here, it has been returned to the pool.
    });
  });

module.exports = pool;
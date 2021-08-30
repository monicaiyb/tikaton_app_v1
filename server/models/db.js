const mysql = require("mysql2");
// const dbConfig = require("../config/db.config.js");

// Create a connection to the database

const pool = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
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

// Create table
const table = ('CREATE TABLE IF NOT EXISTS Artist (id INT(100) NOT NULL AUTO_INCREMENT, name TINYTEXT, PRIMARY KEY(id))');

pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
  
    // Use the connection
    connection.query('CREATE DATABASE IF NOT EXISTS ??', database, function(err, results) {
      if (err) {
        console.log('error in creating database', err);
        return;
      }
    
      console.log('created a new database');
    
      connection.changeUser({
        database : tikation
      }, function(err) {
        if (err) {
          console.log('error in changing database', err);
          return;
        }
    
        connection.query(table, function(err) {
          if (err) {
            console.log('error in creating tables', err);
            return;
          }
    
          console.log('created a new table');
        });
      });
    });
  });

module.exports = pool;
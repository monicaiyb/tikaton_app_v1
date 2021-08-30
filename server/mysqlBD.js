const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '12345',
  database: 'tikaton'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});


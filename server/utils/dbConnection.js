const mysql = require('mysql2/promise');

// MySQL Connection
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'Odkanhe@2003',
  database: 'lab'
});

// Connect to MySQL
async function connect() {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL');
    connection.release();
  } catch (error) {
    console.error('Error connecting to MySQL: ', error);
  }
}

module.exports = { connect, pool };
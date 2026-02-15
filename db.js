const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: '',
    port: 47024
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conexão estabelecida com o MySql')
})

module.exports = db;

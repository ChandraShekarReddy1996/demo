var sql = require('mysql')

var db = sql.createConnection({
host : 'localhost',
user : 'root',
password : 'Saritha@13'
})

var find = (data,doc,callbck) => {
  db.query(`select * from ${doc} where ${data.keys[0] = ${data.data.keys[0]}}`)
}

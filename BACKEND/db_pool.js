const util = require ('util')
const mysql = require('mysql2')
const pool = mysql.createPool({
        host     : "127.0.0.1",
        user     : "root",
        password : "simauz1234",
        port     : 3306,
        database :"jerrybay",
        "dateStrings": true,
        connectionLimit : 30,
        multipleStatements: true
})

//pool.query(`select * from customers`,(err,result,fields)=>{
 //  if(err){
   //    return console.log(err);

   //}
    //return console.log(result);
//})


 //Ping database to check for common exception errors.

 pool.getConnection((err, connection) => {
 if (err) {
   if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Database connection was closed.')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('Database has too many connections.')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('Database connection was refused.')
     }   }

  if (connection) connection.release()

   return 

 })

 // Promisify for Node.js async/await.
 pool.query = util.promisify(pool.query)

 module.exports = pool
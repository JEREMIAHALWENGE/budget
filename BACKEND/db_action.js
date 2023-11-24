var con = require("./db_pool.js");

//=============================DB Functions==========================================

module.exports = {
  //=========Select Query===========
  selectQuery: function (sql, callback) {
    
      try {
        con.query(sql, function (err, rows) {
          if (err) callback(err, null);
          else callback(null, rows);
        });
      } catch (err) {
        console.log(err + "\n" + sql);
      } finally {
      }
    
  },

  //=======Action Query =============

  actionQry: function (sql, callback) {
    try {
      con.query(sql, function (err, rows) {
        if (err) callback(err, null);
        else callback(null, rows.affectedRows);
      });
    } catch (err) {
      console.log(err);
    } finally {
    }
  },

  //=======Action Query Inserted ID=============

  actionQry_id: function (sql, callback) {
    try {
      con.query(sql, function (err, rows) {
        if (err) callback(err, null);
        else callback(null, rows.insertId);
      });   
    } catch (err) {
      console.log(err);
    } finally {
    }
  },

  //Radom Number Generator
  getRandomInt: function (max, min = 0) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },

  logit: function (msg) {
    console.log(new Date() + ": " + msg);
  },

  isEmpty: function (value) {
    return (
      // null or undefined
      value == null ||
      // has length and it's zero
      (value.hasOwnProperty("length" ) && value.length === 0) ||
      // is an Object and has no keys
      (value.constructor === Object && Object.keys(value).length === 0)
    );
  },
}; //====Module
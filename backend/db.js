var mysql  = require('mysql');
var config = require('./config.js');

var connection = mysql.createConnection({
  host     : config.db.host,
  user     : config.db.username,
  password : config.db.password,
  database : config.db.database
});

connection.connect();

var retrieveUserByUsername = function(username, cb) {
    
  var sql = 'SELECT * FROM users WHERE ? LIMIT 1;';
  var params = {'username': username}

  connection.query(sql, params, function(err, res, fields){ 
    if(res)
      cb(err, res[0]); 
    else
      cb(err, null);
  });
}

// var retrieveUserByUsername = function(username, cb) {
    
//   var sql = 'SELECT * FROM users WHERE username = ? LIMIT 1;';

//   connection.query(sql, [username], function(err, res, fields){ 
//     if(res)
//       cb(err, res[0]); 
//     else
//       cb(err, null);
//   });
// }

var retrieveUserId = function(id, cb){
  var sql = 'SELECT * FROM users WHERE ? LIMIT 1;';
  var params = {'id': id};

  connection.query(sql, params, function(err, res, fields){
    if(res)
      cb(err, res[0]);
    else
      cb(err, null);
  });
}


var storeUser = function(user, cb){
  var sql = 'INSERT INTO users SET ?';

  connection.query(sql, user, function(err, res, fields){
    cb(err, res);
  });
}


module.exports = {
  retrieveUserByUsername: retrieveUserByUsername,
  retrieveUserId: retrieveUserId,
  storeUser: storeUser
}

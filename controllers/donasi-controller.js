var connection = require('./../config');
module.exports.donasi=function(req,res){
connection.beginTransaction(function(err) {
  if (err) { throw err; }
  connection.query('INSERT INTO posts SET title=?', title, function(err, result) {
    if (err) {
      connection.rollback(function() {
        throw err;
      });
    }

    var log = 'Post ' + result.insertId + ' added';

    connection.query('INSERT INTO log SET data=?', log, function(err, result) {
      if (err) {
        connection.rollback(function() {
          throw err;
        });
      }
      connection.commit(function(err) {
        if (err) {
          connection.rollback(function() {
            throw err;
          });
        }
        console.log('success!');
      });
    });
  });
});
}

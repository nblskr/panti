var connection = require('./../config');
module.exports.donasi=function(req,res){
      var today = new Date();
      var donasi_uang={
          "id_donasi":req.body.id_donasi,
          "id_user":req.body.id_user,
          "jenisdonasi":req.body.Jenis Donasi,
  		    "jumlahdonasi":req.body.Jumlah Donasi,
  		    "banyakbarang":req.body.Banyak barang,
  		    "namabarang":req.body.Nama barang,
      }
      connection.query('INSERT INTO donasi_uang SET ?',donasi_uang, function (error, results, fields) {
        if (error) {
          res.json({
              status:false,
              message:'there are some error with query'
          })
  		console.log(results);
        }else{
            res.json({
              status:true,
              data:results,
              message:'panti registered sucessfully'
          })
  		console.log(results);
        }
      });
    connection.beginTransaction(function(err) {
      if (err) { throw err; }
      connection.query('INSERT INTO posts SET donasi_uang', donasi, function(err, result) {
        if (err) {
          connection.rollback(function() {
            throw err;
          });
        }

        var log = 'Post ' + result.insertId + ' added';

        connection.query('INSERT INTO log SET donasi_uang', log, function(err, result) {
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

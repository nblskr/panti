var connection = require('../config');
module.exports.register=function(req,res){
    var today = new Date();

    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
		    "no_hp":req.body.no_hp,
        "alamat":req.body.alamat,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
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
            message:'user registered sucessfully'
        })
		console.log(results);
      }
    });
}

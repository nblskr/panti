var connection = require('../config');
module.exports.register=function(req,res){
    var today = new Date();
	
    var rmpanti={
        "nama_panti":req.body.nama_panti,
        "email_panti":req.body.email_panti,
        "password_panti":req.body.password_panti,
		"alamat_panti":req.body.alamat_panti,
		"kondisi_panti":req.body.kondisi_panti,
		"jml_penghuni":req.body.jml_penghuni,
		"nama_pemilik":req.body.nama_pemilik,
		"kontak_panti":req.body.kontak_panti,
        "created_at":today,
        "updated_at":today,
    }
    connection.query('INSERT INTO rmpanti SET ?',rmpanti, function (error, results, fields) {
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
}
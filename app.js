var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var authenticateController=require('./controllers/authenticate-controllers');
var registerController=require('./controllers/registration-controllers');
var regispantiController=require('./controllers/regispanti-controllers');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


/* route to handle login and registration */

app.post('/authenticate-controllers',authenticateController.authenticate);
app.post('/registration-controllers', registerController.register);
app.post('/regispanti-controllers', regispantiController.register);	

app.get('/',function(req, res){   
      res.sendFile(__dirname + '/index.html');
    });
	

app.listen(8012);
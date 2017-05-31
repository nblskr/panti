var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var authenticateController=require('./controllers/authenticate-controllers');
var registerController=require('./controllers/registration-controllers');
var regispantiController=require('./controllers/regispanti-controllers');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/* route to handle login and registration */

//app.post('/authenticate-controllers',authenticateController.authenticate);
app.post('/registration-controllers', registerController.register);
//<<<<<<< HEAD
//=======
//app.post('/regispanti-controllers', regispantiController.register);
//>>>>>>> 559b97fe48247ef8c0a074d4174844572c6087c6
app.get('/',function(req, res){
      res.sendFile(__dirname + '/src/app/register/register.component.ts');
    });

app.listen(8012);

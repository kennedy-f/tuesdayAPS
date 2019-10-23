const express = require ('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload');

const GameController = require('./controller/GameController');

const CreateAccountController = require('./controller/CreateAccountController');
const LoginController = require('./controller/LoginController');

const routes = express.Router(); 
const uploads = multer(uploadConfig); 

routes.post('/createUser', CreateAccountController.store);
routes.post('/userLogin', LoginController.store);
routes.get('/games', GameController.show);
routes.post('/addGame', uploads.single('thumbnail'), GameController.store);


module.exports = routes;
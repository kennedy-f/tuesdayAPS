const express = require ('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload');

const GameController = require('./controller/GameController');

const CreateAccountController = require('./controller/CreateAccountController');
const LoginController = require('./controller/LoginController');
const GameCategories = require('./controller/GameCategories'); 

const routes = express.Router(); 
const upload = multer(uploadConfig); 

routes.post('/createUser', CreateAccountController.store);
routes.post('/userLogin', LoginController.store);
routes.get('/games', GameController.show);
routes.post('/gamesCtg', GameCategories.show);
routes.post('/addGame', upload.single('thumbnail'), GameController.store);


module.exports = routes;
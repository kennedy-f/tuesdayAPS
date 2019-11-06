const express = require ('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload');


const CreateAccountController = require('./controller/CreateAccountController');
const LoginController = require('./controller/LoginController');
const GameController = require('./controller/GameController');
const GameCategories = require('./controller/GameCategories'); 
const GameCart = require('./controller/CartController'); 

const routes = express.Router(); 
const upload = multer(uploadConfig); 

routes.post('/createUser', CreateAccountController.store);

routes.post('/userLogin', LoginController.store);
//routes.get('/bibliotecaTeste', LoginController.index);

routes.get('/games', GameController.show);
routes.get('/game', GameController.index);

routes.get('/gamesCtg', GameCategories.index);

routes.get('/GameCart', GameCart.index);
routes.post('/GameCart', GameCart.store);

routes.post('/addGames', upload.single('thumbnail'), GameController.store);



module.exports = routes;
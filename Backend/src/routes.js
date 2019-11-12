const express = require ('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload');


const CreateAccountController = require('./controller/CreateAccountController');
const LoginController = require('./controller/LoginController');
const GameController = require('./controller/GameController');
const GameCategories = require('./controller/GameCategories'); 
const GameCart = require('./controller/CartController'); 
const LibController = require('./controller/LibController'); 

const routes = express.Router(); 
const upload = multer(uploadConfig); 

//Usuario
routes.post('/createUser', CreateAccountController.store); //criar usuario
routes.post('/userLogin', LoginController.store); //Logar
routes.get('/user', LoginController.index); 
routes.put('/editUser', LoginController.update); 

//biblioteca do usuario
routes.get('/bibliotecaTeste', LibController.index);
routes.get('/biblioteca', LibController.index);

//Pagina dos jogos
routes.get('/games', GameController.show);
routes.get('/game', GameController.index);

//Categoria dos jogos
routes.get('/gamesCtg', GameCategories.index);

//Compar jogo
routes.put('/buygame', GameCart.store);

//Área do admin (Edição e adicionar jogos)
routes.post('/addGames', upload.single('thumbnail'), GameController.store);
routes.post('/editGame', GameController.update); 


module.exports = routes;
const express = require ('express'); 
const multer = require('multer'); 
const uploadConfig = require('./config/upload');

const GameController = require('./controller/GameController');

const UserController = require('./controller/UserController');

const routes = express.Router(); 
const uploads = multer(uploadConfig); 

routes.post('/login', UserController.store);
routes.get('/login', UserController.show);
routes.post('/addGame', uploads.single('thumbnail'), GameController.store);


module.exports = routes;
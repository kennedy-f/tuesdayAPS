const Game = require('../model/Game');
const User = require('../model/User');

module.exports = {    
    async index(req, res) {
        const _id = req.query;

        const buyGame = await Game.find({ _id });

        return res.json(buyGame);
    }, 
    
    async store(req, res){
        const _id = req.body; 

        return res.json({ teste: 'salvou'}); 

    }


};
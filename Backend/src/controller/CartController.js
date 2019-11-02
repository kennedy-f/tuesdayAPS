const Game = require('../model/Game');

module.exports = {    
    async index(req, res) {
        const _id = req.query;

        const buyGame = await Game.find({ _id });

        return res.json(buyGame);
    }


};
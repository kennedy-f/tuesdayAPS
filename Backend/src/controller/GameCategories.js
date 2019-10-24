const Game = require('../model/Game'); 

module.exports = { 
    async show(req, res){        
        const { catgs } = req.body;

        const games = await Game.find({ catgs });

        return res.json(games);
        
    }
}
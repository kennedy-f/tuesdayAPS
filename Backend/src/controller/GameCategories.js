const Game = require('../model/Game'); 

module.exports = { 
    async index(req, res){        
        const { catg } = req.query;

        const games = await Game.find({ catgs: catg });
        
        
        return res.json(games);
        
    }    
}
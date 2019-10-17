const Game = require('../model/Game');

module.exports = {   
    async store(req, res){
        const { filename } = req.file; 
        const { name, desc, requirements, catg, price } = req.body;        

        const game = await Game.create({
            thumbnail: filename,
            name,
            desc, 
            requirements,
            catg,
            price
        })

        return res.json(game);
    }
};
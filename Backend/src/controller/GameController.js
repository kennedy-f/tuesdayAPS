const Game = require('../model/Game');

module.exports = {   
    async store(req, res){
        const { filename } = req.file; 
        const { name, desc, requirements, catg, price, highlight } = req.body;        

        const game = await Game.create({
            thumbnail: filename,
            name,
            desc, 
            requirements: requirements.split(',').map(requirement => requirement.trim()) ,
            catg: catg.split(',').map(cats => cats.trim()) ,
            price, 
            highlight
        })

        return res.json(game);
    },

    async show(req, res) {    
        const onLoad = req.body;     

        const highlightGame = await Game.find({highlight : 'yes'});

        return res.json(highlightGame);
    }
};
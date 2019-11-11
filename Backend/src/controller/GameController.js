const Game = require('../model/Game');

module.exports = {   
    async store(req, res){
        const { filename } = req.file; 
        const { name, desc, minReq, recReq, catgs, price, highlight } = req.body;        

        const game = await Game.create({
            thumbnail: filename,
            name,
            desc, 
            minReq: minReq.split(',').map(requirement => requirement.trim()) ,
            recReq: recReq.split(',').map(requirement => requirement.trim()) ,
            catgs: catgs.split(',').map(cats => cats.trim()) ,
            price, 
            highlight
        })       

        return res.json(game);
    },

    async show(req, res) {    
        const onLoad = req.body;     

        const highlightGame = await Game.find({highlight : true});

        return res.json(highlightGame);
    }, 
    
    async index(req, res) {
        const _id = req.query;

        const buyGame = await Game.find({ _id });

        return res.json(buyGame);
    }, 
    async update(req, res){
        const _id = req.query; 
        const { catgs, name, desc, price, highlight } = req.body;


        const changeGame = await Game.updateOne({ _id }, {  catgs, name, desc, price, highlight }); 

        return res.json({teste: 'tá chegando aqui '}); 
    }
    
    
};
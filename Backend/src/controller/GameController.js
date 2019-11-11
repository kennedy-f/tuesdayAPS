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
        
        const { _id, name, desc, catgs, price, highlight } = req.body;   
        
        if(name){
            const changeName = await Game.updateOne({ _id }, { $set: { name} }); 
        }
        if (desc){
            const changeName = await Game.updateOne({ _id }, { $set: { desc } }); 
        }
        if(catgs){
            const changeName = await Game.updateOne({ _id }, { $set: { catgs } }); 
        }
        if(price){
            const changeName = await Game.updateOne({ _id }, { $set: { price } }); 
        }
        if (highlight) {
            const changeName = await Game.updateOne({ _id }, { $set: { highlight } });
        }        

        return res.json(name); 
        
    }
    
    
};
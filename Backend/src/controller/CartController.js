const Game = require('../model/Game');
const User = require('../model/User');

module.exports = {    
    async index(req, res) {
        const _id = req.query;

        const buyGame = await Game.find({ _id });

        return res.json(buyGame);
    }, 
    
    async store(req, res){        
        const { _id } = req.headers; 
        const { game } = req.query; 
        
        
        const gameExist = await User.findOne({_id}).findOne({ games : game});
        
        if (!gameExist){
            const user = await User.updateOne({ _id }, { $push: { upsert: true, games: game}})
            const newUser = await User.findById(_id); 
            return res.json( {user, compra:'compra feita com sucesso'}); 
        }
        return res.json({jogo: 'já comprado'})
        
    }


};
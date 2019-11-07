const Bag = require('../model/Bag'); 


module.exports = {
    async index(req, res) {

        const { _id } = req.headers; 

        const bag = await Bag.findOne({ _id: _id}).populate('id_game');
        
        return res.json(bag.id_game);
        
    }
}
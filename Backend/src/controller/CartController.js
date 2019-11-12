const Bag = require('../model/Bag'); 

module.exports = {      
    
    async store(req, res){        
        const { _id, bag_id } = req.headers;  
        const { id_game } = req.query; 

        const gameExist = await Bag.findOne({ id_user: _id }).findOne({ id_game});
        const bag = await Bag.find({ id_user: _id}); 
        
        if (!gameExist){
            const upBag = await Bag.updateOne({ _id: bag_id }, { $push: { upsert: true, id_game } })
            const finalBag = await Bag.findOne({ id_user: _id }).populate('id_game');            

            return res.json(id_game); 
        }
        const finalBag = await Bag.findOne({ id_user: _id }).populate('id_game');    

        return res.json(id_game); 
        
    }


};
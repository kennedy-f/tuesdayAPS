// index = mostra tudo, show = mostra um, store = criar, updtate = altera, destroy = deletar destruir
const User = require('../model/User');
const Bag = require('../model/Bag');

module.exports = {
    async store(req, res) {
        const { username, email, password} = req.body;

        let user = await User.findOne({ username }); // declaração de uma variavel user, que vai buscar o username
        let ifEmail = await User.findOne({ email }); // vai buscar o email 
        
        if  (user || ifEmail) { // aqui é se o user existir
            return res.json({ alreadyRegistred: "true"});
        } ;

        if (!user && !ifEmail) { //reparem no '!', que quer dizer se user ou email não existirem então faça 
            user = await User.create({ 
                email,
                username, 
                password, 
                bag : null
            }); 

            const userBag = await Bag.create({
                id_user : user._id
            }); 
            await userBag.populate('id_game').execPopulate(); 
            const atualizarUser = await User.updateOne({_id: user._id }, { $set: { bag: userBag._id } })

            const finalUser = await User.findById(user._id);
            return res.json(finalUser);
            
           

            
        }

        
        return res.json(user);
    }


};
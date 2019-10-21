// index = mostra tudo, show = mostra um, store = criar, updtate = alter, destroy = deletar destruir
const User = require('../model/User');

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
                password
            });          
        }

        
        return res.json(user);
    },

};
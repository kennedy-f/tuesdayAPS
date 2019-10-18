// index = mostra tudo, show = mostra um, store = criar, updtate = alter, destroy = deletar destruir
const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { email, password, username } = req.body;

        let user = await User.findOne({ username }); // declaração de uma variavel user, que vai buscar o username
        let ifEmail = await User.findOne({ email }); // vai buscar o email 
        

        if (!user && !ifEmail) { //reparem no '!', que quer dizer se user ou email não existirem então faça 
            user = await User.create({ 
                email,
                username, 
                password
            });          
        }

        if  (user) { // aqui é se o user existir
            return res.json({ UsernameExist: "true"});
        } ;

        if (email) { // e aqui se o email existir, criei em partes para deixar um aviso diferente para cada 
            return res.json({ EmailExist : "true"});            
        };

        return res.json(user);
    },

    async show (req, res){
        const { password, username } = req.body; 

        
        let user = await User.findOne({ username }).select('+password'); 
        let ifUsername = await User.findOne({username}).select('+username');
        if (!ifUsername) {
            return res.status(400).send('Login não existe');
        }
        if (user.password == password){
            return res.json(user); 
        }
        
        
        return res.status(400).send('Senha errada');

    }
};
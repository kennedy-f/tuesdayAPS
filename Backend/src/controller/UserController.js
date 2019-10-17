// index = mostra tudo, show = mostra um, store = criar, updtate = alter, destroy = deletar destruir
const User = require('../model/User');

module.exports = {
    async store(req, res) {
        const { email, pass, username } = req.body;

        let user = await User.findOne({ username });
        let ifEmail = await User.findOne({ email });
        

        if (!user && !ifEmail) {

            user = await User.create({ 
                email,
                username, 
                pass
            });
            

        }

        if  (user) {
            return res.json({ Usernameexiste : "true"});
        } ;
        if (email) {
            return res.json({ Emailexiste : "true"});
        };

        return res.json(user);
    }
};
// index = mostra tudo, show = mostra um, store = criar, updtate = alter, destroy = deletar destruir
const User = require('../model/User');


module.exports = {
    
    async store(req, res){
        const { password, username } = req.body;


        let user = await User.findOne({ username }).select('+password');
        let ifUsername = await User.findOne({ username }).select('+username');

        if (!ifUsername) {
            return res.json({ erro : 'UserDontExist'});
        }
        if (user.password == password) {
            return res.json(user);
          
        } 

        return res.json({erro : 'wrongPassword'})


        
    }, 
    
    async index(req, res) {
        const { _id } = req.headers;

        let user = await User.findOne({ _id} );

        return res.json(user)
    }, 

    async update(req, res){
        const { _id, email, username, password} = req.body; 
        let edit; 
        if(username){
            const edit = await User.updateOne({_id}, {$set : {username}})
            
        }
        if(email){
            const edit = await User.updateOne({_id}, {$set: {email}})
            
        }
        if(password){
            const edit = await User.updateOne({_id}, {$set : {password}})
            
        }

        return res.json(edit); 
    }

}
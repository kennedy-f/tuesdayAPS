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


        
    }

}
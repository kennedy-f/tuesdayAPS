const mongoose = require ('mongoose'); 

const GameSchema = new mongoose.Schema ({
    thumbnail : String,
    name : String,
    desc: String,    
    requirements: [String],
    catg : [String],
    price: Number  
    
});

GameSchema.virtual('thumbnail_url').get(function(){
    return `http://192.168.0.108:3333/files/${this.thumbnail}`
});

module.exports = mongoose.model('Game', GameSchema); 

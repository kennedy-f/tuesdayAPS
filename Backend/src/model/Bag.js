const mongoose = require('mongoose');

const BagSchema = new mongoose.Schema({
    id_user: String,
    id_game: String
});

module.exports = mongoose.model('Bag', BagSchema); 

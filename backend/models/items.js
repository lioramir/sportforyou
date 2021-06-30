const mongoose = require('mongoose');


const Schema = mongoose.Schema


const itemsSchema= new Schema({

    
    name: {type: String , require: true },
    category:{type: String , require: true },
    praic: {type: Number , require: true },
    Previous_price: {type: Number , require: true },
    Measure: {type: Boolean , require: true },
    printing: {type: Boolean , require: true },
    Pants: {type: Boolean , require: true },
    picture:{type: String , require: true },
    picture2: {type: String , require: true },


});

module.exports= mongoose.model('items',itemsSchema );
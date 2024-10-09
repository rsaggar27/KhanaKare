const mongoose =require('mongoose');

const {Schema} = mongoose;

const menuSchema =new Schema({
    
    breakfast:{type:String,required:[true,"fill the meal"]},
    lunch:{type:String,required:[true,"fill the meal"]},
    dinner:{type:String,required:[true,"fill the meal"]},
    snacks:{type:String,required:[true,"fill the meal"]},
    mess:{type:String,required:[true,"fill the time"]}, //combo, bf, lunch, snacks, dinner
    day:{type:String,required:[true,"fill the day"]}//combo mon,tue
})

module.exports=mongoose.model('Menu',menuSchema);
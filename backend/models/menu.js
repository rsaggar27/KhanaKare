const mongoose =require('mongoose');

const {Schema} = mongoose;

const menuSchema =new Schema({
    meal_name:{type:String,required:[true,"fill the meal"]},
    time:{type:String,required:[true,"fill the time"]}, //combo, bf, lunch, snacks, dinner
    day:{type:String,required:[true,"fill the day"]}//combo mon,tue
})

module.exports=mongoose.model('Menu',menuSchema);
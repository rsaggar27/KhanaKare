const mongoose =require('mongoose');

const {Schema} = mongoose;

const rebateSchema =new Schema({
    sid:{type:String,required:[true,"fill the meal"]},
    from_time:{type:String,required:[true,"fill the from_time"]}, //combo, bf, lunch, snacks, dinner
    from_date:{type:Date,required:[true,"fill the from_day"]},//combo mon,tue
    to_time:{type:String,required:[true,"fill the to_time"]}, //combo, bf, lunch, snacks, dinner
    to_date:{type:Date,required:[true,"fill the to_day"]},//combo mon,tue
    meals_skipped:{type:Number, required:[true,"fill the meals_skipped"]},
    date_applied:{type:Date,default: Date.now()}
})

module.exports=mongoose.model('Rebate',rebateSchema);
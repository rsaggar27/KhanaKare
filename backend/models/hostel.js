const mongoose =require('mongoose');

const {Schema} = mongoose;

const hostelSchema =new Schema({
    name:{type:String,required:[true,"fill the name"]},
    type:{type:String,required:[true,"fill the type"]} //combo
})

module.exports=mongoose.model('Hostel',hostelSchema);
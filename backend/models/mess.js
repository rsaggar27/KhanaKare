const mongoose =require('mongoose');

const {Schema} = mongoose;

const messSchema =new Schema({
    emailid:{type:String,required:[true,"fill the email"]},
    password:{type:String,required:[true,"fill the password"]},
    name:{type:String,required:[true,"fill the name"]},
    cnumber:{type:String,required:[true,"fill the number"]},
    ownership:{type:String,required:[true,"fill the ownership"]}, //combo
    hostel:{type:String,required:[true,"fill the hostel"]}, //combo
    status:{type:Number}
})
module.exports=mongoose.model('Mess',messSchema);
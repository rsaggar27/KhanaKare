const mongoose =require('mongoose');

const {Schema} = mongoose;

const studentSchema =new Schema({
    emailid:{type:String,required:[true,"fill the email"]},
    password:{type:String,required:[true,"fill the password"]},
    sid:{type:String,required:[true,"fill the sid"]},
    name:{type:String,required:[true,"fill the name"]},
    cnumber:{type:String,required:[true,"fill the number"]},
    branch:{type:String,required:[true,"fill the branch"]}, //combo
    hostel:{type:String,required:[true,"fill the hostel"]}, //combo
    mess:{type:String,required:[true,"fill the mess"]},  //combo
    ppic:{type:String,default:null},
    status:{type:String,default:"Active"}
})

module.exports=mongoose.model('Student',studentSchema);
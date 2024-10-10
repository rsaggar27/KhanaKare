const mongoose =require('mongoose');

const {Schema} = mongoose;

const feedbackSchema =new Schema({
    name:{type:String,required:[true,"fill the sid"]},
    sid:{type:String,required:[true,"fill the sid"]},
    feedback:{type:String,required:[true,"fill the feedback"]},   
})

module.exports=mongoose.model('Feedback',feedbackSchema);
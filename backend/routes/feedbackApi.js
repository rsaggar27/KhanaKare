const express= require('express');
const router=express.Router();
const Feedback=require('../models/feedback');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/',(req,res)=>{
    let b=req.body;
    let data={
        sid:b.sid,
        feedback:b.feedback
    }
    let feedback =new Feedback(data);

    feedback.save().then((respJson,err)=>{
        console.log(respJson)
        if(err!=null)
        res.send(err.message);
        res.send({response:"Feedback Sent!"});

    })
});

router.get('/',(req,res)=>{

    Feedback.find().then((respJson,err)=>{
        if(err!=null)
        res.send(err.message);
        else{
            res.send(respJson);
        }
        
    })
});



module.exports=router;


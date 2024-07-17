const express= require('express');
const router=express.Router();
const Rebate=require('../models/rebate');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/',(req,res)=>{
    let b=req.body;
    let data={
       sid:b.sid,
       from_time:b.from_time,
       to_time:b.to_time,
       from_date:b.from_date,
       to_date:b.to_date,
       meals_skipped:b.meals_skipped,
       date_applied:b.date_applied
    }
    let rebate =new Rebate(data);

    rebate.save().then((respJson,err)=>{
        // console.log(respJson)
        if(err!=null)
        res.send(err.message);
        else
        res.send({response:"Rebate Saved"});
    })
});

router.get('/',(req,res)=>{

    Rebate.find({sid:req.query.sid}).then((respJson,err)=>{
        if(err!=null)
        res.send(err.message);
        else{
            res.send(respJson);
        }     
    })
});



module.exports=router;


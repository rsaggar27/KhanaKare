const express= require('express');
const router=express.Router();
const Hostel=require('../models/hostel');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/',(req,res)=>{
    let b=req.body;
    let data={
        name:b.name,
        type:b.type
    }
    let hostel =new Hostel(data);

    hostel.save().then((respJson,err)=>{
        console.log(respJson)
        if(err!=null)
        res.send(err.message);
        res.send({response:"Record Saved"});

    })
});

router.get('/',(req,res)=>{

    Hostel.find().then((respJson,err)=>{
        if(err!=null)
        res.send(err.message);
        else
        res.send(respJson);
        
    })
});



module.exports=router;


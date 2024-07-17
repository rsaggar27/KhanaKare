const express= require('express');
const router=express.Router();
const Mess=require('../models/mess');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/sign-up',(req,res)=>{
    let b=req.body;
    let data={
        emailid:b.emailid,
        password:b.password,
        name:b.name,
        cnumber:b.cnumber,
        ownership:b.ownership,
        hostel:b.hostel
    }
    let mess =new Mess(data);

    mess.save().then((respJson,err)=>{
        // console.log(respJson)
        if(err!=null)
        res.send(err.message);
        else
        res.send({response:"Mess Saved"});

    })
});

router.post('/login',(req,res)=>{

    Mess.find({emailid:req.body.email, password:req.body.pwd}).then((respJson,err)=>{
        if(err!=null)
        res.send(err.message);
    
        if(respJson.length>=1){
            res.send({response:"success",userId:respJson[0]._id});
        }
        else{
            res.send({response:"failed"});
        }
    })
});



module.exports=router;


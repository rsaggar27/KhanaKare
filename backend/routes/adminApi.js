const express= require('express');
const router=express.Router();
const Admin=require('../models/admin');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/sign-up',(req,res)=>{
    let b=req.body;
    let data={
        emailid:b.emailid,
        password:b.password
    }
    let admin =new Admin(data);

    admin.save().then((respJson,err)=>{
        console.log(respJson)
        if(err!=null)
        res.send(err.message);
        res.send({response:"Record Saved"});

    })
});

router.post('/login',(req,res)=>{

    Admin.find({emailid:req.body.emailid, password:req.body.password}).then((respJson,err)=>{
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


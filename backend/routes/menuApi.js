const express= require('express');
const router=express.Router();
const Menu=require('../models/menu');
const mongoose=require('mongoose');

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}


router.post('/',(req,res)=>{
    let b=req.body;
    let data={
        meal_name:b.meal_name,
        time:b.time,
        day:b.day
    }

    let menu =new Menu(data);

    menu.save().then((respJson,err)=>{
        console.log(respJson)
        if(err!=null)
        res.send(err.message);
        res.send({response:"Menu Saved"});

    })
});

router.get('/',(req,res)=>{

    Menu.find().then((respJson,err)=>{
        if(err!=null)
        res.send(err.message);
        else{
            res.send(respJson);
        }
    })
});



module.exports=router;


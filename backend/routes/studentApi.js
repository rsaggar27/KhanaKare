const express= require('express');
const router=express.Router();
const Student=require('../models/student');
const mongoose=require('mongoose');
const multer  = require('multer');
const path = require('path')

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}

router.use('/public', express.static(path.join(__dirname, 'public')))

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage: storage })

router.post('/sign-up',upload.single('ppic'),(req,res)=>{
    let b=req.body;
    let p="localhost:3000/public/"
    let data={
        emailid:b.emailid,
        password:b.password,
        name:b.name,
        cnumber:b.cnumber,
        sid:b.sid,
        branch:b.branch,
        hostel:b.hostel,
        mess:b.mess,
        ppic:p+req.file.filename
    }
    let student =new Student(data);

    student.save().then((respJson,err)=>{
        // console.log(respJson)
        if(err!=null)
        res.send(err.message);
        else
        res.send({response:"Student Saved"});

    })
});

router.post('/login',(req,res)=>{

    Student.find({emailid:req.body.email, password:req.body.pwd}).then((respJson,err)=>{
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


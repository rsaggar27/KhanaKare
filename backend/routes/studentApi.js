const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const Mess =require("../models/mess");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}

router.use("/public", express.static(path.join(__dirname, "public")));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/sign-up", async (req, resp) => {
  let b = req.body;
  // let p="localhost:3000/public/"
let m= await Mess.findOne({hostel:b.hostel,status:1});

  let mess= m.name;
  let data = {
    emailid: b.emailid,
    password: b.password,
    name: b.name,
    cnumber: b.cnumber,
    sid: b.sid,
    branch: b.branch,
    hostel: b.hostel,
    mess: mess,
    // ppic:p+req.file.filename
  };

  
  let student = new Student(data);
let s = await Student.findOne({ sid: b.sid});
console.log(s);
if (s) {
  // Return to prevent further execution after sending the response
  return resp.send({ response: "SID already Exists !!" });
}

try {
  await student.save();
  // Return to ensure no further code is executed after the response
  return resp.send({ response: "Student created successfully!" });
} catch (error) {
  // Handle error and return to stop further execution
  return resp.send({ response: "An error occurred while saving the student." });
}

});

router.post("/login", (req, res) => {
  Student.find({ emailid: req.body.email, password: req.body.pwd }).then(
    (respJson, err) => {
      if (err != null) res.send(err.message);

      if (respJson.length >= 1) {
        res.send({ response: "success", userId: respJson[0]._id });
      } else {
        res.send({ response: "failed" });
      }
    }
  );
});

router.get("/", (req, resp) => {
  Student.find({})
    .then((respJson) => {
      resp.send(respJson);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/:id", (req, resp) => {
  Student.findOne({ _id: req.params.id })
    .then((respJson) => {
      resp.send(respJson);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/mess-id/:id",(req,resp)=>{
  let hostel=""
  Student.findOne({ _id: req.params.id }).then((respJson)=>{
    hostel=respJson.hostel;
    Mess.findOne({hostel:hostel}).then((respJson2)=>{
      resp.send({response:respJson2._id});
    })
  })
  
})

router.put("/status/:id", (req, resp) => {
  Student.updateOne({ _id: req.params.id }, { status: req.body.status })
    .then((respJson) => {
      resp.send({ resp: "success" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.put("/:id", (req, resp) => {
  let b = req.body;
  Student.updateOne(
    { _id: req.params.id },
    {
      emailid: b.emailid,
      password: b.password,
      name: b.name,
      cnumber: b.cnumber,
      sid: b.sid,
      branch: b.branch,
      hostel: b.hostel,
      mess: b.mess,
    }
  )
    .then((respJson) => {
      resp.send({ resp: "success" });
    })
    .catch((err) => {
      console.log(err.message);
    });
});




module.exports = router;



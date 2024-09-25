const express = require("express");
const router = express.Router();
const Mess = require("../models/mess");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}

router.post("/sign-up", (req, res) => {
  let b = req.body;
  let data = {
    emailid: b.emailid,
    password: b.password,
    name: b.name,
    cnumber: b.cnumber,
    ownership: b.ownership,
    hostel: b.hostel,
    status: b.status,
  };
  let mess = new Mess(data);

  Mess.updateOne({ hostel: b.hostel, status: 1 }, { status: 0 }).then(
    (respJson) => {
      //   console.log("statusUpadated");

      mess.save().then((respJson, err) => {
        // console.log(respJson)
        if (err != null) res.send(err.message);
        else res.send({ response: "Mess Saved" });
      });
    }
  );
});

router.post("/login", (req, res) => {
  Mess.find({ emailid: req.body.email, password: req.body.pwd }).then(
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
  Mess.find({})
    .then((respJson) => {
      resp.send(respJson);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.get("/:id", (req, resp) => {
  Mess.findOne({ _id: req.params.id })
    .then((respJson) => {
      resp.send(respJson);
    })
    .catch((err) => {
      console.log(err.message);
    });
});

router.put("/:id", (req, resp) => {
  let b = req.body;
  Mess.updateOne(
    { _id: req.params.id },
    {
      emailid: b.emailid,
      name: b.name,
      cnumber: b.cnumber,
      ownership: b.ownership,
      hostel: b.hostel,
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

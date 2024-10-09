const express = require("express");
const router = express.Router();
const Menu = require("../models/menu");
const mongoose = require("mongoose");

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/messdatabase");
}

router.post("/", (req, res) => {
  let b = req.body.d;
  let mess = req.body.id;
  let cnt=0;
  Menu.deleteMany({mess:mess}).then(()=>{
    for (x of b) {
      console.log(x)
      for (y in x) {
        let data = {
          breakfast: x[y][0],
          lunch: x[y][1],
          dinner: x[y][3],
          snacks: x[y][2],
          mess: mess,
          day: y,
        };
        let menu = new Menu(data);
  
        menu.save().then((respJson, err) => {
          // console.log(respJson);
          cnt++;
          if (err != null) res.send(err.message);
          
        });
      }
    }
    console.log("Records saved: "+cnt);
    res.send({response:"Menu Saved"});
  }).catch((err)=>{
    console.log(err.message)
  })
});

router.get("/:id", (req, res) => {
  // console.log("In the function");
  Menu.find({"mess":req.params.id}).sort({_id:1}).then((respJson, err) => {
    if (err != null) res.send(err.message);
    else {

      // console.log(respJson)
      res.send(respJson);
    }
  });
});

module.exports = router;

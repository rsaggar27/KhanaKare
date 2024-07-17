const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const cors=require('cors');
const port = 3000;

app.listen(port,()=>{
    console.log(`Listening to port at ${port}`);
})

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.use(cors({origin:'*'}));

const Admin = require('./routes/adminApi')
app.use('/admin',Admin);

const Feedback = require('./routes/feedbackApi')
app.use('/feedback',Feedback);

const Hostel = require('./routes/hostelApi')
app.use('/hostel',Hostel);

const Menu = require('./routes/menuApi')
app.use('/menu',Menu);

const Mess = require('./routes/messApi')
app.use('/mess',Mess);

const Rebate = require('./routes/rebateApi')
app.use('/rebate',Rebate);

const Student = require('./routes/studentApi')
app.use('/student',Student);
let express = require("express");
let app = express();
let scheduleFuncs = require("./scheduleFuncs");
let port = process.env.port || 8081;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",(req,res)=>{
res.render("home");
});

app.get("/editSchedule",(req,res)=>{
        res.render("scheduleForm",);
    });

app.post("/editSchedule",(req,res)=>{
    scheduleFuncs.scheduleReq(req.body).then((data)=>{
        res.render("scheduleForm",);
    }).catch(err=>console.log(err));
  
    });

    app.get("/newEmployee",(req,res)=>{
        res.render("newEmployee",);
    });

    app.get("/scheduleForNextWeek",(req,res)=>{
       scheduleFuncs.makeSchedule(scheduleFuncs.employees);
       res.render("finalSchedule",{data:scheduleFuncs.schedule});
    });

app.post("/newEmployee",(req,res)=>{
    scheduleFuncs.newWorker(req.body).then((data)=>{
        res.render("newEmployee",);
    }).catch(err=>console.log(err));
  
    });

app.listen(port,()=>(console.log(`Standing by on port ${port}`)));
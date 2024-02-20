let express = require("express");
let app = express();
let scheduleFuncs = require("./scheduleFuncs");
let port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

app.get("/",(req,res)=>{
res.render("home");
});

app.get("/editSchedule",(req,res)=>{
        res.render("scheduleForm");
    
    });

app.post("/editSchedule",(req,res)=>{
    scheduleFuncs.scheduleReq(req.body).then((data)=>{
        res.render("scheduleForm");
    }).catch(err=>console.log(err));
  
    });
    
    app.get("/newEmployee",(req,res)=>{
        res.render("newEmployee",);
    });

app.post("/newEmployee",(req,res)=>{
    scheduleFuncs.newWorker(req.body).then((data)=>{
        res.render("newEmployee",);
    }).catch(err=>console.log(err));
  
    });

    app.get("/findEmployee",(req,res)=>{
        res.render("findEmployee",);
    });

    app.post("/findEmployee", (req, res) => {
        scheduleFuncs.findEmployee(req.body).then((data) => {
            const employeeToEdit = data[0].employees; 
            res.render("editEmployee", { workerToEdit: employeeToEdit });
        }).catch(err => console.log(err));
    });

    app.post("/editEmployee", (req, res) => {
        scheduleFuncs.editEmployee(req.body).then((data) => {
            res.render("home");
        }).catch(err => console.log(err));
    });

    app.get("/scheduleForNextWeek",(req,res)=>{
        scheduleFuncs.makeSchedule().then((schedule)=>{
         res.render("finalSchedule",{data:schedule});
        })
     });

app.listen(port,()=>(console.log(`Standing by on port ${port}`)));
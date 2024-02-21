let express = require("express");
let app = express();
let scheduleFuncs = require("./scheduleFuncs");
let port = process.env.PORT || 8080;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(express.static('views'));

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
            if (data.length && data[0].employees && data[0].employees.length) {
                const employeeToEdit = data[0].employees; 
                res.render("editEmployee", { workerToEdit: employeeToEdit });
            } else {
                res.render("404", { message: "Employee not found." }); 
            }
        }).catch(err => {
            console.log(err);
            res.status(500).render("error", { error: "An error occurred while searching for the employee." });
        });
    });
    

    app.post("/editEmployee", (req, res) => {
        scheduleFuncs.editEmployee(req.body).then((data) => {
            res.render("home");
        }).catch(err => console.log(err));
    });

    app.get("/",(req,res)=>{
        scheduleFuncs.makeSchedule().then((schedule)=>{
         res.render("finalSchedule",{data:schedule});
        })
     });

     app.get("/newSchedule",(req,res)=>{
        scheduleFuncs.newSchedule();
        scheduleFuncs.makeSchedule().then((schedule)=>{
         res.render("finalSchedule",{data:schedule});
        })
     });

app.listen(port,()=>(console.log(`Standing by on port ${port}`)));
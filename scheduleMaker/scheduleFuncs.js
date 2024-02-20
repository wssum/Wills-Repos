const mongoose = require('mongoose');
const schema = mongoose.Schema;
const db = mongoose.createConnection('mongodb+srv://wssum:7895123Zz@wssumcluster.mtthdw5.mongodb.net/managers')
const managerSchema = new schema({
  managerName: String,
  employees: [{name: String,
  daysAvailable:[{name: String, 
    from: Number, 
    to: Number}]}],
schedule: [{
    day: String,
    opener: [{name: String,
      daysAvailable:[{name: String, 
        from: Number, 
        to: Number}]}],
    closer: [{name: String,
      daysAvailable:[{name: String, 
        from: Number, 
        to: Number}]}],
    allAround: [{name: String,
      daysAvailable:[{name: String, 
        from: Number, 
        to: Number}]}],
    openersRequired: Number,
    closersRequired: Number,
    allAroundsRequired: Number,
    open: Number,
    close: Number
  }]
});

const Managers = db.model("Managers",managerSchema);

function whichShift(worker, workDay) {
  let shift = null;
  worker.daysAvailable.forEach((shiftDay) => {
      if (shiftDay.name.toLowerCase() === workDay.day.toLowerCase()) {
          if (shiftDay.from <= workDay.open && shiftDay.to < workDay.close) {
              if(workDay.opener.length < workDay.openersRequired)
              {
                  shift = "O";
              }
          } else if (shiftDay.from > workDay.open && shiftDay.to >= workDay.close) {
              if(workDay.closer.length < workDay.closersRequired)
              {
                  shift = "C";
              }

          } else if (shiftDay.from <= workDay.open && shiftDay.to >= workDay.close) {
              if(workDay.allAround.length < workDay.allAroundsRequired)
              {
                  shift = "A";
              }
              else if(workDay.closer.length < workDay.closersRequired)
              {
                  shift = "C";
              }
              else if(workDay.opener.length < workDay.openersRequired)
              {
                  shift = "O";
              }
          }
      }
  });
  return shift;
}


function makeSchedule() {
  return Managers.findOne({ managerName: "Wilson Sum" })
    .then(data => {
      const schedule = data.schedule;
      const workers = data.employees;
      
      schedule.forEach(date => {
        workers.forEach(worker => {
          const isAvailable = worker.daysAvailable.some(workerDay => workerDay.name.toLowerCase() === date.day.toLowerCase());

          if (isAvailable) {
            if ((whichShift(worker,date)== "A") && date.allAround.length < date.allAroundsRequired) {
                if(!date.allAround.some(workMan=>workMan.name == worker.name))
                {
                    date.allAround.push(worker);
                }
            } if ((whichShift(worker,date)== "O") && (date.opener.length < date.openersRequired)) {
                if(!date.opener.some(workMan=>workMan.name == worker.name))
                {
                    date.opener.push(worker);  
                }
            } else if ((whichShift(worker,date)== "C") && (date.closer.length < date.closersRequired)) {
                if(!date.closer.some(workMan=>workMan.name == worker.name))
                {
                    date.closer.push(worker);
                }
            }
            else if((date.allAround.length >=1)&&(date.opener.length === 0)&&(whichShift(worker,date)== "O"))
            {
                if(!date.opener.some(workMan=>workMan.name == worker.name))
                {
                    date.opener.push(worker);  
                }
            }
            else if((date.allAround.length >=1)&&(date.opener.length === 0)&&(whichShift(worker,date)== "C"))
            {
                if(!date.closer.some(workMan=>workMan.name == worker.name))
                {
                    date.closer.push(worker);
                }
            }
        }  
        });
      });
      return schedule;
    })
    .catch(error => {
      throw error;
    });
}


async function scheduleReq(daysOfWork)
{
  try{
    let workDays = [
      {
          opener: [],
          closer: [],
          allAround: [],
          day: "Sunday",
          allAroundsRequired: daysOfWork.sunAllAroundsRequired,
          openersRequired: daysOfWork.sunOpenersRequired,
          closersRequired: daysOfWork.sunClosersRequired,
          open: daysOfWork.sunOpen,
          close: daysOfWork.sunClose,
      },{
          opener: [],
          closer: [],
          allAround: [],
          day: "Monday",
          allAroundsRequired: daysOfWork.monAllAroundsRequired,
          openersRequired: daysOfWork.monOpenersRequired,
          closersRequired: daysOfWork.monClosersRequired,
          open: daysOfWork.monOpen,
          close: daysOfWork.monClose,
      },
      {
          opener: [],
          closer: [],
          allAround: [],
          day: "Tuesday",
          allAroundsRequired: daysOfWork.tuesAllAroundsRequired,
          openersRequired: daysOfWork.tuesOpenersRequired,
          closersRequired: daysOfWork.tuesClosersRequired,
          open: daysOfWork.tuesOpen,
          close: daysOfWork.tuesClose,
      },{
          opener: [],
          closer: [],
          allAround: [],
          day: "Wednesday",
          allAroundsRequired: daysOfWork.wedAllAroundsRequired,
          openersRequired: daysOfWork.wedOpenersRequired,
          closersRequired: daysOfWork.wedClosersRequired,
          open: daysOfWork.wedOpen,
          close: daysOfWork.wedClose,
      },{
          opener: [],
          closer: [],
          allAround: [],
          day: "Thursday",
          allAroundsRequired: daysOfWork.thursAllAroundsRequired,
          openersRequired: daysOfWork.thursOpenersRequired,
          closersRequired: daysOfWork.thursClosersRequired,
          open: daysOfWork.thursOpen,
          close: daysOfWork.thursClose,
      },{
          opener: [],
          closer: [],
          allAround: [],
          day: "Friday",
          allAroundsRequired: daysOfWork.friAllAroundsRequired,
          openersRequired: daysOfWork.friOpenersRequired,
          closersRequired: daysOfWork.friClosersRequired,
          open: daysOfWork.friOpen,
          close: daysOfWork.friClose,
      },{
          opener: [],
          closer: [],
          allAround: [],
          day: "Saturday",
          allAroundsRequired: daysOfWork.satAllAroundsRequired,
          openersRequired: daysOfWork.satOpenersRequired,
          closersRequired: daysOfWork.satClosersRequired,
          open: daysOfWork.satOpen,
          close: daysOfWork.satClose,
      }]; 
 const data = await Managers.updateOne({managerName:"Wilson Sum"},{$set:{schedule:workDays}});
 console.log(data);
  }
  catch(err){
    console.log(err);
  }
         
}


 async function newWorker(employ) {
  try {
    let availability = [
      {name: "Monday", from: employ.monAvailFrom, to: employ.monAvailTo},
      {name: "Tuesday", from: employ.tuesAvailFrom, to: employ.tuesAvailTo},
      {name: "Wednesday", from: employ.wedAvailFrom, to: employ.wedAvailTo},
      {name: "Thursday", from: employ.thursAvailFrom, to: employ.thursAvailTo},
      {name: "Friday", from: employ.friAvailFrom, to: employ.friAvailTo},
      {name: "Saturday", from: employ.satAvailFrom, to: employ.satAvailTo},
      {name: "Sunday", from: employ.sunAvailFrom, to: employ.sunAvailTo}
    ];
    let daysAvailable = availability.filter(day => day.from && day.to);
    let newEmployee = {
      name: employ.empName,
      daysAvailable
    };

    const data = await Managers.updateOne({managerName: "Wilson Sum"}, {$push: {employees: newEmployee}});
    console.log(data); // This will log the result of the update operation
  } catch (err) {
    console.log(err); // This will log any errors that occur during the update
  }
}


module.exports ={makeSchedule,whichShift,Managers,newWorker,scheduleReq};
const employees = [
  {
    name: "Athrun Zala",
    daysAvailable: [
      {name: "Sunday", from: 9, to: 14},
      {name: "Monday", from: 9, to: 14}, 
      {name: "Tuesday", from: 10, to: 22}, 
      {name: "Wednesday", from: 9, to: 14}
    ]
  },
  {
    name: "Greg Capall",
    daysAvailable: [
      {name: "Thursday", from: 15, to: 23}, 
      {name: "Friday", from: 15, to: 22}, 
      {name: "Saturday", from: 15, to: 24}
    ]
  },
  {
    name: "Homer Simpson", 
    daysAvailable: [
      {name: "Sunday", from: 7, to: 24}, 
      {name: "Monday", from: 7, to: 24}, 
      {name: "Tuesday", from: 7, to: 24}, 
      {name: "Wednesday", from: 7, to: 24}, 
      {name: "Thursday", from: 7, to: 24}, 
      {name: "Friday", from: 7, to: 24}, 
      {name: "Saturday", from: 7, to: 24}
    ]
  },
  {
    name: "Will Sum",
    daysAvailable: [
      {name: "Monday", from: 15, to: 22}, 
      {name: "Tuesday", from: 15, to: 22}, 
      {name: "Wednesday", from: 15, to: 22}, 
      {name: "Sunday", from: 15, to: 22}
    ]
  },
  {
    name: "Avery Man", 
    daysAvailable: [
      {name: "Thursday", from: 7, to: 14}, 
      {name: "Friday", from: 7, to: 14}, 
      {name: "Saturday", from: 7, to: 14}, 
      {name: "Sunday", from: 7, to: 14}
    ]
  },
  {
    name: "Marge Simpson",
    daysAvailable: [
      {name: "Monday", from: 7, to: 24}, 
      {name: "Wednesday", from: 7, to: 24},
      {name: "Thursday", from: 7, to: 14}, 
      {name: "Friday", from: 7, to: 24}
    ]
  },
  {
    name: "Tony Lau",
    daysAvailable: [
      {name: "Tuesday", from: 7, to: 24}, 
      {name: "Thursday", from: 7, to: 24},
      {name: "Friday", from: 15, to: 24}, 
      {name: "Saturday", from: 7, to: 24}
    ]
  },
  {
      name: "Ray Gibson",
      daysAvailable: [
       {name: "Saturday", from: 7, to: 14},
        {name: "Friday", from: 15, to: 24}, 
        {name: "Thursday", from: 7, to: 24}
      ]
    },
    {
      name: "Billy Jeans",
      daysAvailable: [
       {name: "Saturday", from: 15, to: 24},
        {name: "Sunday", from: 7, to: 24}
      ]
    }
];

let schedule = [
  {
    day: "Monday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 1,
    allAroundsRequired: 1,
    open: 9,
    close: 22
  },
  {
    day: "Tuesday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 1,
    allAroundsRequired: 1,
    open: 9,
    close: 22
  },
  {
    day: "Wednesday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 1,
    allAroundsRequired: 2, 
    open: 9,
    close: 22
  },
  {
    day: "Thursday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 2,
    allAroundsRequired: 2, 
    open: 9,
    close: 23
  },
  {
    day: "Friday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 2,
    allAroundsRequired: 2, 
    open: 9,
    close: 23
  },
  {
    day: "Saturday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 2,
    closersRequired: 2,
    allAroundsRequired: 2, 
    open: 8,
    close: 23
  },
  {
    day: "Sunday",
    opener: [],
    closer: [],
    allAround: [],
    openersRequired: 1,
    closersRequired: 1,
    allAroundsRequired: 2, 
    open: 9,
    close: 22
  }
];
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




function makeSchedule(workers) {
  schedule.forEach(function(date) {
      workers.forEach((worker) => {
          const isAvailable = worker.daysAvailable.some(workerDay => workerDay.name.toLowerCase() === date.day.toLowerCase());
          
          if (isAvailable) {
              if ((whichShift(worker,date)== "A") && date.allAround.length < date.allAroundsRequired) {
                  if(!date.allAround.some(workMan=>workMan.name == worker.name))
                  {
                      date.allAround.push(worker);
                  }
              } else if ((whichShift(worker,date)== "O") && (date.opener.length < date.openersRequired)) {
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
}
//for testing only
/*function makeSchedule(workers) {
  schedule.forEach(function(date) {
      workers.forEach((worker) => {
          const isAvailable = worker.daysAvailable.some(workerDay => workerDay.name.toLowerCase() === date.day.toLowerCase());
          
          if (isAvailable) {
              if ((whichShift(worker,date)== "A") && date.allAround.length < date.allAroundsRequired) {
                  if(!date.allAround.some(workMan=>workMan.name == worker.name))
                  {
                      date.allAround.push(worker.name);
                  }
              } else if ((whichShift(worker,date)== "O") && (date.opener.length < date.openersRequired)) {
                  if(!date.opener.some(workMan=>workMan.name == worker.name))
                  {
                      date.opener.push(worker.name);  
                  }
              } else if ((whichShift(worker,date)== "C") && (date.closer.length < date.closersRequired)) {
                  if(!date.closer.some(workMan=>workMan.name == worker.name))
                  {
                      date.closer.push(worker.name);
                  }
              }
              else if((date.allAround.length >=1)&&(date.opener.length === 0)&&(whichShift(worker,date)== "O"))
              {
                  if(!date.opener.some(workMan=>workMan.name == worker.name))
                  {
                      date.opener.push(worker.name);  
                  }
              }
              else if((date.allAround.length >=1)&&(date.opener.length === 0)&&(whichShift(worker,date)== "C"))
              {
                  if(!date.closer.some(workMan=>workMan.name == worker.name))
                  {
                      date.closer.push(worker.name);
                  }
              }
          }
      });
  });
}
*/
function scheduleReq(daysOfWork)
{
  return new Promise((resolve,reject)=>
  {
    try{
      let workDays = []; 

      let sun = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Sunday",
          allAroundsRequired: daysOfWork.sunAllAroundsRequired,
          openersRequired: daysOfWork.sunOpenersRequired,
          closersRequired: daysOfWork.sunClosersRequired,
          open: daysOfWork.sunOpen,
          close: daysOfWork.sunClose,
      };
      workDays.push(sun);
      
      let mon = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Monday",
          allAroundsRequired: daysOfWork.monAllAroundsRequired,
          openersRequired: daysOfWork.monOpenersRequired,
          closersRequired: daysOfWork.monClosersRequired,
          open: daysOfWork.monOpen,
          close: daysOfWork.monClose,
      };
      workDays.push(mon);
      
      let tues = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Tuesday",
          allAroundsRequired: daysOfWork.tuesAllAroundsRequired,
          openersRequired: daysOfWork.tuesOpenersRequired,
          closersRequired: daysOfWork.tuesClosersRequired,
          open: daysOfWork.tuesOpen,
          close: daysOfWork.tuesClose,
      };
      workDays.push(tues);
      
      let wed = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Wednesday",
          allAroundsRequired: daysOfWork.wedAllAroundsRequired,
          openersRequired: daysOfWork.wedOpenersRequired,
          closersRequired: daysOfWork.wedClosersRequired,
          open: daysOfWork.wedOpen,
          close: daysOfWork.wedClose,
      };
      workDays.push(wed);
      
      let thurs = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Thursday",
          allAroundsRequired: daysOfWork.thursAllAroundsRequired,
          openersRequired: daysOfWork.thursOpenersRequired,
          closersRequired: daysOfWork.thursClosersRequired,
          open: daysOfWork.thursOpen,
          close: daysOfWork.thursClose,
      };
      workDays.push(thurs);
      
      let fri = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Friday",
          allAroundsRequired: daysOfWork.friAllAroundsRequired,
          openersRequired: daysOfWork.friOpenersRequired,
          closersRequired: daysOfWork.friClosersRequired,
          open: daysOfWork.friOpen,
          close: daysOfWork.friClose,
      };
      workDays.push(fri);
      
      let sat = {
          opener: [],
          closer: [],
          allAround: [],
          day: "Saturday",
          allAroundsRequired: daysOfWork.satAllAroundsRequired,
          openersRequired: daysOfWork.satOpenersRequired,
          closersRequired: daysOfWork.satClosersRequired,
          open: daysOfWork.satOpen,
          close: daysOfWork.satClose,
      };
      workDays.push(sat);
      schedule = workDays;         
      resolve(schedule);
    }catch(error)
    {
       reject(error);
    }
  })
}

function newWorker(employ)
{
  return new Promise((resolve,reject)=>{
   try{
    let availability= [
      {name: "Monday", from: employ.monAvailFrom, to: employ.monAvailTo},
      {name: "Tuesday", from: employ.tuesAvailFrom, to: employ.tuesAvailTo},
      {name: "Wednesday", from: employ.wedAvailFrom, to: employ.wedAvailTo},
      {name: "Thursday", from: employ.thursAvailFrom, to: employ.thursAvailTo},
      {name: "Friday", from: employ.friAvailFrom, to: employ.friAvailTo},
      {name: "Saturday", from: employ.satAvailFrom, to: employ.satAvailTo},
      {name: "Sunday", from: employ.sunAvailFrom, to: employ.sunAvailTo}
    ];
    let daysAvailable = availability.filter(day=>day.from && day.to);
    let newEmployee = {
      name: employ.empName,
      daysAvailable
    };

   employees.push(newEmployee);
   resolve(employees);    
   }catch(error)
   {
    console.log(error);
   }
  });
}


module.exports ={makeSchedule,schedule,employees,whichShift,scheduleReq,newWorker};
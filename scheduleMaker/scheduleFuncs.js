const employees = [
    {
      name: "Athrun Zala",
      daysAvailable: [
        {name: "Sunday", from: 7, to: 12},
        {name: "Monday", from: 7, to: 12}, 
        {name: "Tuesday", from: 10, to: 22}, 
        {name: "Wednesday", from: 7, to: 12}
      ]
    },
    {
      name: "Greg Capall",
      daysAvailable: [
        {name: "Thursday", from: 15, to: 22}, 
        {name: "Friday", from: 15, to: 22}, 
        {name: "Saturday", from: 15, to: 22}
      ]
    },
    {
      name: "Homer Simpson", 
      daysAvailable: [
        {name: "Sunday", from: 7, to: 22}, 
        {name: "Monday", from: 7, to: 22}, 
        {name: "Tuesday", from: 7, to: 22}, 
        {name: "Wednesday", from: 7, to: 22}, 
        {name: "Thursday", from: 7, to: 22}, 
        {name: "Friday", from: 7, to: 22}, 
        {name: "Saturday", from: 7, to: 22}
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
        {name: "Thursday", from: 7, to: 12}, 
        {name: "Friday", from: 7, to: 12}, 
        {name: "Saturday", from: 7, to: 12}, 
        {name: "Sunday", from: 7, to: 12}
      ]
    },
    {
      name: "Marge Simpson",
      daysAvailable: [
        {name: "Monday", from: 7, to: 22}, 
        {name: "Wednesday", from: 7, to: 22},
        {name: "Thursday", from: 7, to: 12}, 
        {name: "Friday", from: 7, to: 22}
      ]
    },
    {
      name: "Tony Lau",
      daysAvailable: [
        {name: "Tuesday", from: 7, to: 22},
        {name: "Friday", from: 15, to: 22}, 
        {name: "Thursday", from: 7, to: 22}, 
        {name: "Saturday", from: 7, to: 22}
      ]
    },
    {
        name: "Ray Gibson",
        daysAvailable: [
         {name: "Saturday", from: 7, to: 12},
          {name: "Friday", from: 15, to: 22}, 
          {name: "Thursday", from: 7, to: 22}
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
      open: 7,
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
      open: 7,
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
      open: 7,
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
      open: 7,
      close: 22
    },
    {
      day: "Friday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 2,
      allAroundsRequired: 2, 
      open: 7,
      close: 22
    },
    {
      day: "Saturday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 2,
      closersRequired: 1,
      allAroundsRequired: 2, 
      open: 7,
      close: 22
    },
    {
      day: "Sunday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 2,
      closersRequired: 1,
      allAroundsRequired: 1, 
      open: 7,
      close: 22
    }
  ];

  function whichShift(worker,workDay)
  {
      let shift;
      worker.daysAvailable.forEach((shiftDay)=>{
          if(shiftDay.name.toLowerCase == workDay.day.toLowerCase)
          {
              if((shiftDay.from == workDay.open)&& (shiftDay.to < workDay.close))
              {
                  shift = "O";
              }
              else if((shiftDay.from > workDay.open)&& (shiftDay.to == workDay.close))
              {
                  shift = "C";
              }
              else if((shiftDay.from >= workDay.open)&& (shiftDay.to == workDay.close)){
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
      })
     return shift;
  }
 

//make days have anouther attribute for each for number of openenrs, closers and allaround
function makeSchedule(workers) {
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

makeSchedule(employees);

console.log(schedule);
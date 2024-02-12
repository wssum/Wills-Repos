const employees = [
    {
      name: "Athrun Zala",
      morning: true,
      night: false,
      daysAvailable: [
        {name: "Monday", from: 7, to: 12}, 
        {name: "Tuesday", from: 10, to: 22}, 
        {name: "Wednesday", from: 7, to: 12}
      ]
    },
    {
      name: "Greg Capall",
      morning: false,
      night: true,
      daysAvailable: [
        {name: "Thursday", from: 15, to: 22}, 
        {name: "Friday", from: 15, to: 22}, 
        {name: "Saturday", from: 15, to: 22}
      ]
    },
    {
      name: "Homer Simpson", 
      morning: true,
      night: true,
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
      morning: false,
      night: true,
      daysAvailable: [
        {name: "Monday", from: 15, to: 22}, 
        {name: "Tuesday", from: 15, to: 22}, 
        {name: "Wednesday", from: 15, to: 22}, 
        {name: "Sunday", from: 15, to: 22}
      ]
    },
    {
      name: "Avery Man", 
      morning: true,
      night: false,
      daysAvailable: [
        {name: "Thursday", from: 7, to: 12}, 
        {name: "Friday", from: 7, to: 12}, 
        {name: "Saturday", from: 7, to: 12}, 
        {name: "Sunday", from: 7, to: 12}
      ]
    },
    {
      name: "Marge Simpson",
      morning: true,
      night: true,
      daysAvailable: [
        {name: "Monday", from: 7, to: 22}, 
        {name: "Wednesday", from: 7, to: 22}, 
        {name: "Friday", from: 7, to: 22}
      ]
    },
    {
      name: "Tony Lau",
      morning: true,
      night: true,
      daysAvailable: [
        {name: "Tuesday", from: 7, to: 22}, 
        {name: "Thursday", from: 7, to: 22}, 
        {name: "Saturday", from: 7, to: 22}
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
      allAroundsRequired: 1, // Remains 1 for Monday
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
      allAroundsRequired: 1, // Remains 1 for Tuesday
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
      allAroundsRequired: 2, // Updated to 2
      open: 7,
      close: 22
    },
    {
      day: "Thursday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2, // Updated to 2
      open: 7,
      close: 22
    },
    {
      day: "Friday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2, // Updated to 2
      open: 7,
      close: 22
    },
    {
      day: "Saturday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2, // Updated to 2
      open: 7,
      close: 22
    },
    {
      day: "Sunday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2, // Updated to 2
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
            if((shiftDay.from >= workDay.open)&& (shiftDay.to <= (workDay.open + 5)))
            {
                shift = "O";
            }
            else if((shiftDay.from >= (workDay.open + 8))&& (shiftDay.to <= workDay.close))
            {
                shift = "C";
            }
            else if((shiftDay.from >= workDay.open)&& (shiftDay.to <= workDay.close)){
                shift = "A";
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
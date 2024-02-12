const employees = [
    {
      name: "Athrun Zala", // Opener
      morning: true,
      night: false,
      daysAvailable: ["Monday", "Tuesday", "Wednesday"]
    },
    {
      name: "Greg Capall", // Closer
      morning: false,
      night: true,
      daysAvailable: ["Thursday", "Friday", "Saturday"]
    },
    {
      name: "Homer Simpson", // All-Around
      morning: true,
      night: true,
      daysAvailable: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    },
    {
      name: "Will Sum", // Closer
      morning: false,
      night: true,
      daysAvailable: ["Monday", "Tuesday", "Wednesday", "Sunday"]
    },
    {
      name: "Avery Man", // Opener
      morning: true,
      night: false,
      daysAvailable: ["Thursday", "Friday", "Saturday", "Sunday"]
    },
    {
      name: "Marge Simpson", // All-Around
      morning: true,
      night: true,
      daysAvailable: ["Monday", "Wednesday", "Friday"]
    },
    {
      name: "Tony Lau", // All-Around
      morning: true,
      night: true,
      daysAvailable: ["Tuesday", "Thursday", "Saturday"]
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
      allAroundsRequired: 1 // Remains 1 for Monday
    },
    {
      day: "Tuesday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 1 // Remains 1 for Tuesday
    },
    {
      day: "Wednesday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2 // Updated to 2
    },
    {
      day: "Thursday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2 // Updated to 2
    },
    {
      day: "Friday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2 // Updated to 2
    },
    {
      day: "Saturday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2 // Updated to 2
    },
    {
      day: "Sunday",
      opener: [],
      closer: [],
      allAround: [],
      openersRequired: 1,
      closersRequired: 1,
      allAroundsRequired: 2 // Updated to 2
    }
  ];
  
//make days have anouther attribute for each for number of openenrs, closers and allaround
function makeSchedule(workers) {
    schedule.forEach(function(date) {
        workers.forEach((worker) => {
            const isAvailable = worker.daysAvailable.some(workerDay => workerDay.toLowerCase() === date.day.toLowerCase());
            
            if (isAvailable) {
                if ((worker.morning && worker.night) && date.allAround.length < date.allAroundsRequired) {
                    if(!date.allAround.some(workMan=>workMan.name == worker.name))
                    {
                        date.allAround.push(worker.name);
                    }
                } else if (worker.morning && date.opener.length < date.openersRequired) {
                    if(!date.opener.some(workMan=>workMan.name == worker.name))
                    {
                        date.opener.push(worker.name);  
                    }
                } else if (worker.night && date.closer.length < date.closersRequired) {
                    if(!date.closer.some(workMan=>workMan.name == worker.name))
                    {
                        date.closer.push(worker.name);
                    }
                }
                else if((date.allAround.length >=1)&&(date.opener.length === 0)&&worker.morning)
                {
                    if(!date.opener.some(workMan=>workMan.name == worker.name))
                    {
                        date.opener.push(worker.name);  
                    }
                }
                else if((date.allAround.length >=1)&&(date.opener.length === 0)&&worker.night)
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
// Code your solution here

let drivers = [{
    "name": "naya"
  },
  {
    "name": "nashan"
  },
  {
    "name": "ross"
  },
  {
    "name": "asish"
  },
  {
    "name": "ozzie"
  },
]

const findMatching = (drivers, string) => {
  let foundDrivers = drivers.filter(driver => {
    return driver.toLowerCase() === string.toLowerCase()
  })
  return foundDrivers
}

const fuzzyMatch = (drivers, string) => {
  let foundDrivers = drivers.filter(driver => {
    return driver[0].toLowerCase() === string[0].toLowerCase()
  })
  return foundDrivers
}

const matchName = (drivers, string) => {
  let foundDrivers = drivers.filter(driverObj => {
    return driverObj.name.toLowerCase() === string.toLowerCase()
  })
  return foundDrivers;
}

// console.log(matchName(drivers, "ozzie"));

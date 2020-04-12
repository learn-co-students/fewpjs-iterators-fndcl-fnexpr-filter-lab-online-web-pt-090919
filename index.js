// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, testString) {
  return drivers.filter( driver =>
    driver.toLowerCase() === testString.toLowerCase()
  )
}


function fuzzyMatch(drivers, testString) {
  return drivers.filter( driver =>
    driver.toLowerCase().indexOf(testString.toLowerCase()) === 0
  )
}

function matchName(drivers, givenName) {
  return drivers.filter( driver => driver.name === givenName)
}
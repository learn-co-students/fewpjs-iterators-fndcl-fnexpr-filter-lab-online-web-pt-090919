// Code your solution here

const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const string = 'Bobby';

function findMatching(array, driver) {
    return array.filter( d => {
        return d.toLowerCase() == driver.toLowerCase()
    }) 
}

function fuzzyMatch(array, driver) {
    return array.filter( d => {
        return d[0].toLowerCase() == driver[0].toLowerCase()
    })
}

function matchName (array, driver) {
    return array.filter(d => {
       return d.name.toLowerCase() == driver.toLowerCase()
    })
}
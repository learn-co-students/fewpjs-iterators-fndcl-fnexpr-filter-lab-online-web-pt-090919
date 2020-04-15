// Code your solution here
const array = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
const string = 'Bobby';

function findMatching(drivers, name) {
    return drivers.filter( e => {
        return e.toLowerCase() == name.toLowerCase()
    }) 
}

function fuzzyMatch(drivers, name) {
    return drivers.filter( e => {
        return e[0].toLowerCase() == name[0].toLowerCase()
    })
}

function matchName (drivers, name) {
    return drivers.filter(e => {
       return e.name.toLowerCase() == name.toLowerCase()
    })
}
// Code your solution here
function findMatching(arr, str) {
    return arr.filter(e => {
        return e.toLowerCase() === str.toLowerCase()
    })
}

function fuzzyMatch(arr, str) {
    return arr.filter(string => {
        return str[0].toLowerCase() === string[0].toLowerCase()
    })
}

function matchName(arr, str) {
    return arr.filter(string => {
        return string.name.toLowerCase() === str.toLowerCase()
    })
}
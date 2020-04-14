// Code your solution here

function findMatching(list, target) {
    return list.filter(n => {
        return n.toLowerCase() === target.toLowerCase();
    });
};

function fuzzyMatch(list, target) {
    return list.filter(n => {
        return n.substr(0, target.length) === target;
    });
};

function matchName(list, target) {
    return list.filter(n => {
        return n.name === target;
    });  
};
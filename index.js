// Code your solution here 
function findMatching(drivers, name) {
    let van = drivers.filter(n => {
        return n.toLowerCase() == name.toLowerCase();
      });
    return van
};

function fuzzyMatch(drivers, letters) {
    let thing = drivers.filter(n => {
        return n.startsWith(letters);
      });
    return thing
};

function matchName(drivers, string){
    let chicken = drivers.filter(n => {
        return n.name === string;
      });
    return chicken
}
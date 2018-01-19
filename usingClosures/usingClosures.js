/*function makeIdGenerator() {
  var id = 0;
  // The following is the closure function
  return function() {
    // This inner function accesses and assigns the value of
    // the variable id, which was defined in the parent function
    id += 1;
    return id;
  }
}
// makeIdGenerator returns a function which is assigned to
// the variable nextId
var nextId = makeIdGenerator();

console.log(nextId()); // Logs: 1
console.log(nextId()); // Logs: 2*/



/*var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)*/


function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var dice = -1;

  return function() {
    if(dice == list.length - 1) {
      dice = 0;
      return list[dice]
    } else {
      dice += 1
      return list[dice]
    }
  }
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
console.log(rollLoadedDie());  // 6
var words = ["ground", "control", "to", "major", "tom"];

function myMap(array, cb) {
  // for(i of array){
  var newArray = [];
  for(var i = 0; i < array.length; i++) {
    var element = array[i];
    newArray.push(cb(element));
    // console.log(array[i]);
  }
  return newArray;
  console.log(newArray);
}

myMap(words, function(element){
  return element.length;
});
myMap(words, function(element){
  return element.toUpperCase();
});

myMap(words, function(element){
  return element.split('').reverse().join('');
});



// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

// Yours will take in two arguments. The first will be an array to map and the second will be a callback function.
// The function will return a new array based on the results of the callback function.













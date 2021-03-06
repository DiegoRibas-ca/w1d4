// Create a function called wrapLog() that takes in a function (callback) and a string (name) and
// returns a function that internally invokes (calls) callback during its execution and also logs the name,
// input parameters, and return value of the callback function. Following is a template with example usage.

var wrapLog = function (callback, name) {
    // console.log(arguments[0]) // see the function callback

  return function(){
    // var output = [name];
    // output.split("");
    // output.push("(")
    var joinArguments = ''
    for (var i = 0; i < arguments.length; i++) {
      joinArguments += arguments[i]
      if (i !== arguments.length - 1) {
        joinArguments += ', ';
      }
      // console.log(arguments[i])
    }
    // console.log(callback.apply(null, arguments))
    // console.log(`${nameStr}(     => ${callback.apply(null, arguments)}`)
    // console.log(name+'('+arguments[0]+arguments[1]+)
    console.log(`${name}(${joinArguments}) => ${callback.apply(null, arguments)}`);

  }



  /* your code here */
};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

logArea(5, 3); // area(5, 3) => 15
logArea(3, 2); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

logVolume(5, 3, 2); // volume(5, 3, 2) => 30
logVolume(3, 2, 4); // volume(3, 2, 4) => 24


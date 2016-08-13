//Return the value that would be present at a passed in index (n), 
//if we were looking at an array consisting of the Fibonacci sequence 

var fibonacciIndex = function(n) {
  //set variables for the first 3 numbers in the Fib # series
  var a = 0;
  var b = 1;
  var c = 1;

  //need this conditional to handle the first value, otherwise continue
  if (n === 0) {
    return 0;
  } else {
    
    //start at the 2 index position, the second "1" in the series
    //iterate forwards, adding previous two values 
    //and setting next index to its corresponding successive Fib #
    //stop looping at or before n position
    for (var i = 2; i <= n; i++) {
      //present value is previous two values added together
      c = a + b;
      //reassign variables as we iterate forward in Fib # series
      a = b;
      b = c;
    }
    //return the value at current (n) position
    return c;
  }
};

console.log(fibonacciIndex(9));

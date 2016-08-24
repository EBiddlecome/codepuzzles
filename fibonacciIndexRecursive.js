//Return the value that would be present at a passed in index (n), 
//if we were looking at an array consisting of the Fibonacci sequence 


//Recursive solution:
var fibonacciIndex = function(n) {
	//base case: if 0 or 1, stop recursing and return value of n 
  if (n <= 1) {
    return n;
  } else {
    //call function recursively to add and return the product of
    //values at the two immediately preceding index positions
    return fibonacciIndex(n - 1) + fibonacciIndex(n - 2);
  }
};


//test:

//returns 3
fibonacciIndex(4);

//returns 34
fibonacciIndex(9);

//returns 832040
fibonacciIndex(30);

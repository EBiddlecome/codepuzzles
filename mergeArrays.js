//Given two arrays as input, return them combined as a single array arranged in ascending order

var mergeArrays = function (a, b) {
  //iterate through the first array
  for (var i = 0; i < a.length; i++) {
  //push each element of array a into array b
    b.push(a[i]);
  }
  //return both arrays combined as one and sorted,
  //passing in an anonymous secondary sorting function to sort; so as  to handle all cases (i.e. negative and multi-digit integers)
  return b.sort(function(a, b) {
    return a - b;
  });
};

//define a test case
//including 0, 10, -11 to make sure we handle all cases
// var a = [6, 9, 2, 1, 9, 0];
// var b = [10, 7, -11, 3, 4];

// console.log(mergeArrays(a, b));
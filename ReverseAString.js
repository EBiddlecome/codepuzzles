//display the characters in a string in reverse order

var reverseString = function (string) {

  //define our caching variable
  var backwards = '';

  //iterate backwards through the string
  //stopping at first letter
  for (var i = string.length - 1; i >= 0; i--) {

    //add each letter to cache as we decrement
    backwards += string[i];
  }

  //return cache to display reversed string
  return backwards;
};

// test case
// var str = 'abcdefg';
// console.log(reverseString(str));

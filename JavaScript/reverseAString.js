//Display the characters in a string in reverse order


//define test case:
var str = 'abcdefg';


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


//test:

//returns 'gfedcba'
reverseString(str);

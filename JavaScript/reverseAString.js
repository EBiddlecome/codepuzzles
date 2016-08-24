//Display the characters in a string in reverse order


//define test case:
var str = 'abcdefg';

//Fast, using native array reverse method:

var reverseString = function (string) {
  //split string into characters, reverse array,
  //then join characters back into string to display in reverse
  return string.split('').reverse().join('');
};

//Iterative Solution:

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
console.log(reverseString(str));

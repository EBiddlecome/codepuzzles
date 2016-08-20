//Determine whether a string contains only unique characters


//declare test cases:

var string1 = 'cdZacFc1c30';
var string2 = 'abc';
var string3 = 'ab   c';
var string4 = 'aaaaaa';
var string5 = 'a';


//write func to return true if all letters in string are unique

var isUnique = function(str) {
	//use an object for character comparison storage
	//hashmap
  var chars = {};

  //loop though the string
  for (var i = 0; i < str.length; ++i) {
    //each letter corresponds to one character in string
    var letter = str[i];

    //compare each of the letters against themselves (chars)
    if (chars[letter]) {
      //if there are duplicates, return false
      return false;
    } else {
      //else, there are de facto NO duplicates
      chars[letter] = true;
    }
  }
  //return true if string contains NO matching characters
  //otherwise, will return false at first duplicate encounter
  return true;
};

//Solved with RegEx three slightly different ways:

// var isUnique = function(str) {
// 	//check for duplicates w/regex!

// 	//dot matches any single character except line terminators
// 	//is character appearing more than once? 
//  //capture all characters to group check against 
//   var duplicates = /(.)\1/;
//   //running this will return true if there are duplicates
//   //invert the returned boolean to match our desired output
//   return duplicates.test(str) ? false : true;
// };

// var isUnique = function (str) {
//   var repeats = new RegExp(/(.)\1/);
//   return !repeats.test(str);
// };

// var isUnique = function (str) {
//   if (str.match(/(.)\1/)) {
//     return false;
//   }
//   return true;
// };


// test
isUnique(string5);
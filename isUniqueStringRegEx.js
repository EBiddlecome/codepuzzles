//Determine whether a string contains only unique characters


//declare test cases:

//function should return true if all letters in string are unique

var string1 = 'cdZaF130';
var string2 = 'abc';
var string3 = 'ab   c';
var string4 = 'aaaaaa';
var string5 = 'a';


//Solved with RegEx three slightly different ways:

var isUnique = function(str) {
	//check for duplicates w/regex!

	//dot matches any single character except line terminators
	//is character appearing more than once? 
 //capture all characters to group check against 
  var duplicates = /(.)\1/;
  //running this will return true if there are duplicates
  //invert the returned boolean to match our desired output
  return duplicates.test(str) ? false : true;
};


var isUnique = function (str) {
  var duplicates = new RegExp(/(.)\1/);
  return !duplicates.test(str);
};


var isUnique = function (str) {
  if (str.match(/(.)\1/)) {
    return false;
  }
  return true;
};


//test:

//returns true
isUnique(string1);

//returns true
isUnique(string2);

//returns false
isUnique(string3);

//returns false
isUnique(string4);

//returns true
isUnique(string5);
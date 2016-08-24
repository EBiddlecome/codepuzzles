// Given two strings, write a method to decide if one is a permutation of the other.


//define test cases:

//if permutation, should return true
//case insensitive

var stringA = 'dog day afternoon';
var stringB = 'a tragedy nonfood';
var stringC = 'doge Ya Daoonftrn';
var stringD = 'dog   day   afternoon';


//fast, with native methods:

var isPermutation = function(string1, string2) {
  //split the strings into arrays, sort by character
  //turn back into (ordered) strings for ez comparison
  var s1 = string1.split('').sort().toString();
  var s2 = string2.split('').sort().toString();
  //print true or false in the console based on equality
  return (s1 === s2) ? true : false;
};


//iterative:

var isPermutation = function(string1, string2) {
	//split the strings into arrays, sort by character
  var s1 = string1.split('').sort();
  var s2 = string2.split('').sort();

  //if the array lengths are different, not a permutation
  if (s1.length !== s2.length) {
    return false;
  }

  //iterate through each character, checking for equality
  //will return false at first non-match
  //will return true if all characters match in both strings
  for (i = 0; i < s1.length; i++) {
    for (j = 0; j < s2.length; j++) {
      if (s1[i] !== s2[j]) {
        return false;
      }
      return true;
    }
  }
};


//test:

//returns true
isPermutation(stringA, stringB);

//returns true
isPermutation(stringA, stringC);

//returns false
isPermutation(stringA, stringD);

//returns true
isPermutation(stringB, stringC);

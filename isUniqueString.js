//Determine whether a string contains only unique characters


//declare test cases:

//function should return true if all letters in string are unique

var string1 = 'cdZaF130';
var string2 = 'abc';
var string3 = 'ab   c';
var string4 = 'aaaaaa';
var string5 = 'a';


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

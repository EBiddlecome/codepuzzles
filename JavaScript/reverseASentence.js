//Display the words in a sentence in reverse order


//define test case:
var phrase = 'When the hoomans are away, the dogs will play';


var reverseSentence = function (sentence) {

  //split the sentence into words, using spaces as separator
  var words = sentence.split(' ');

  //define caching variable
  var reversed = ' ';

  //iterate backwards through the words in the sentence
  for (var i = words.length - 1; i >= 0; i--) {

    //add each word to the cache
    reversed += words[i] + ' ';
  }

  //return cache contents, which will be the words listed in reverse
  return reversed;
};


//test:

//returns 'play will dogs the away, are hoomans the When'
reverseSentence(phrase);

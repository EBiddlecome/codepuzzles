function reverse(sentence) {
	//split the sentence into words, using spaces as separator
	var words = sentence.split(" ");
	//define caching variable
	var reversed = " ";
	//iterate backwards through the words in the sentence
	for (var i = words.length - 1; i >= 0; i--){
		//add each word to the cache
		reversed += words[i] + " ";
	}
	//return cache contents, which will be the words listed in reverse
	return reversed;
};


var phrase =  "When the hoomans are away, the dogs will play";

console.log(reverse(phrase));


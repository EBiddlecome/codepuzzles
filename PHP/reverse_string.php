<?php
/*
* Display the characters in a string in reverse order
* 
* Define test case:
*/
$str = 'abcdefg';
/*
*
* Ordinarily, we might just use 
*   echo strrev("abcdefg");
* to achieve the desired output.
*
* But today is no ordinary day! 
* Here is an iterative solution in PHP:
*
*
* Define length variable as length of string
* Iterate backwards through string, 
* outputting each character in reverse.
*/
function reverse_string($string){
  $length = strlen($string);

  for ($i = $length; $i >= 0; $i--) {
    echo $string[$i-1];
  }
}
/*
* Test output: gfedcba
*/
reverse_string($str);
?>

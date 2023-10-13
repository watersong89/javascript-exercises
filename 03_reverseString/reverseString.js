const reverseString = function(word) {
  let wordArray = word.split("");
  let wordArrayReversed = wordArray.reverse();
  let newString = wordArrayReversed.join("");
  return newString;
};



// Do not edit below this line
module.exports = reverseString;

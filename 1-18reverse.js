//reverse argument and return it.
solution = (str) => {
  // split the word up by each place and save it to variable.
  const wordList = str.split("");
// reverse list and save it to a variable.
  const reverseList = wordList.reverse();
  // put the word back together in its reversed order and save to a variable.
  const reverseWord = reverseList.join("")
  
 console.log(reverseWord)
}

solution("hello")
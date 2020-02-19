// write a function that reverse all the words in a string

// I need to take the string apart so that I can operate on each word/ str.split(' ')
// Then .split('') each word and reverse each array/ x = str.map((w)=> )
// push these reversed letters back together .join to an array and return that array joined
// have the main function return x

// const reverseWords = (str) => {
//   let firstsplit = str.split(' ')
//   console.log(firstsplit)
//   let turnedAround = []
//   answer = firstsplit.map((word) => {
//     reversed = word.split('').reverse()
//     turnedAround.push(reversed.toString())
//     console.log(turnedAround)
//   })
// return answer.join()
// }

reverseWords = (str) => {
  return str.split(' ').map((word) => {
    return word.split('').reverse().join('')
  }).join(' ');
}

solution = reverseWords("hello world")

console.log(solution)

// the issue with my solution is in the join.
// by join can take arguments that dictate how to re join the words 
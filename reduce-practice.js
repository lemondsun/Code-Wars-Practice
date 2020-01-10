// const numbers = [0, -1, -5,]

// const sum = numbers.reduce((acc, curr) => {
//   return acc + curr;
// }, numbers[0])

// console.log(sum);

// ------ Leet Code Question ---------

// Task:
// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

oddOrEven = (array) => {
  // find the sum of given array
  const sum = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0)
// check if array is empty
  if (array.length === 0) {
    return "even"
  }
// find the value if array has only one number
  if (array.length === 1 && array[0] % 2 === 0) {
    return "even"
  } else if (array.length === 1 && array[0] % 2 != 0) {
    return "odd"
  }
// check if sum of array is odd or even and then return response
  if (array.length > 1 && sum % 2 === 0) {
      return "even"
    } else if (array.length > 1 && sum % 2 !=0) {
     return "odd"
    }
  
}

oddOrEven([0, 1, 4])
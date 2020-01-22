// create a function that returns the lowest and the highest value of arr
function minMax(arr) {
// use math.min() to return the number with the lowest value
// use math.max() to return the number with the highest value
  return [Math.min(...arr), Math.max(...arr)];
}
module.exports = {
  add,
};

// function add(...numbers) {
//   return numbers.reduce((acc, num) => {
//     return (acc += num ? num : 0);
//   }, 0);
// }

function add(numbers){
  const values = Array.isArray(numbers) ? numbers : Array.from(arguments);

  //using accumulator = sum, adding value = numbers added together, 0 is where adding starts
  return values.reduce((sum, value = 0) => {return sum + value}, 0);
}

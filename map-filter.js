//Using For Loop

// const numbers = [3, 2, 3, 4, 5, 6, 7];
// const output = [];
// for (let i = 0; i < numbers.length; i++) {
//   const element = numbers[i];
//   const result = element * element;
//   output.push(result);
// }
// console.log(output);

//Using Map

// const numbers = [3, 2, 3, 4, 5, 6, 7];
// function square(element) {
//   return element * element;
// }

// const result = numbers.map(function (element) {
//   // index, array) {
//   // console.log(element, index, array);
//   return element * element;
// });
// console.log(result);

//Using Arrow Function

// const square = (element) => element * element;
// const square = (x) => x * x;

// const numbers = [3, 2, 3, 4, 5, 6, 7];
// const result = numbers.map((x) => x * x);
// console.log(result);

//Filter

const numbers = [3, 2, 3, 4, 5, 6, 7];
// const bigger = numbers.filter((x) => x > 5);
const isThere = numbers.find((x) => x < 5);
console.log(isThere);

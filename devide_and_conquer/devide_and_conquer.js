console.log("JavaScript. Devide and conquer");

const source = [1, 2, 3];

/**
 * @function
 * @name devideAndConquer
 * @description Calculate summ of array items
 * @argument {Array<number>} arr - Array with numbers
 * @returns {number} - Summ of array items
 */
function devideAndConquer(arr = []) {
  if (!arr.length) {
    return 0;
  }

  if (arr.length === 1) {
    return arr[0];
  }

  const midl = Math.floor(arr.length / 2);
  const half = arr.splice(0, midl);

  console.log("middle: ", midl, "arr:", arr, "; value:", half);

  return devideAndConquer(arr) + devideAndConquer(half);
}

console.log("Result: ", devideAndConquer(source));

// ==========================================================
/**
 * @function
 * @name devideAndConquerMax
 * @description Search max. value in source array
 * @argument {Array<number>} arr - source array with numbers
 * @returns {number} - Max value of source array item
 */
// function devideAndConquerMax(arr = []) {
//   const value = arr.splice(0, 1);

//   if (value > devideAndConquerMax(arr)) {
//     return value;
//   } else {
//     return devideAndConquerMax(arr);
//   }
// }

// console.log("Max value: ", devideAndConquerMax(source));

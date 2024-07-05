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

  const value = arr.splice(0, 1);

  console.log("arr:", arr, "; value:", value[0]);

  return value[0] + devideAndConquer(arr);
}

console.log("Result: ", devideAndConquer(source));

/**
 *
 * @param {Array} arr
 * @returns {Number} - number of unique values in the array
 */

function countUniqueValues(arr) {
  let count = 0
  let lftPointer = 0
  let rytPointer = 1

  for (let i = 0; i < arr.length; i++) {
    console.log({ count, lftPointer, rytPointer })
    if (arr[lftPointer] === arr[rytPointer]) {
      rytPointer++
    } else {
      count++
      lftPointer = rytPointer
      rytPointer++
    }
  }

  return count
}

const pattern = [1, 1, 1, 1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13, 14, 15]

console.log(countUniqueValues(pattern)) // 2

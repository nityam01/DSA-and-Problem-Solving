/**
 *
 * @param {array} - arr
 * @returns {array} - array of two numbers whose sum is zero
 */

function sumZero(arr) {
  let lftPointer = 0
  let rytPointer = arr.length - 1

  while (lftPointer < rytPointer) {
    if (arr[lftPointer] + arr[rytPointer] > 0) {
      rytPointer--
    } else if (arr[lftPointer] + arr[rytPointer] < 0) {
      lftPointer++
    } else if (arr[lftPointer] + arr[rytPointer] === 0) {
      return [arr[lftPointer], arr[rytPointer]]
    }
  }
}

const pattern = [-3, -2, -1, 0, 1, 2, 3]

console.log(sumZero(pattern)) // [-3,3]

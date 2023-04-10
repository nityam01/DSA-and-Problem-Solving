const sum = (arr) => {
  return arr.reduce((curr, acc) => {
    return curr + acc
  }, 0)
}
// O(n)

/**
 *
 * @param {array} nums
 * @returns number
 */
const pivotIndex = (nums) => {
  let totalSum = sum(nums)

  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === totalSum - leftSum - nums[i]) {
      return i
    }

    leftSum += nums[i]
  }

  return -1
}

let nums
// nums = [1,7,3,6,5,6]
nums = [1, 2, 3]
console.log(pivotIndex(nums))

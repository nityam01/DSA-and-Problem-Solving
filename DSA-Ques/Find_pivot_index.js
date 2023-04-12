/**
 * Pivot Index: The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
 *
 * QUES: https://leetcode.com/problems/find-pivot-index/
 * ANSWER: https://www.youtube.com/watch?v=u89i60lYx8U
 *
 * values in arr can be negative so it is posible for pivot index to 0
 * we have to find the left most pivot index so we will start from left side as we don't care about if we find pivot index on right side as we start from left side... the first value we will get we will just return as
 *
 *
 *
 */

const sum = (arr) => {
  return arr.reduce((curr, acc) => {
    return curr + acc
  }, 0)
}
// O(n)

/**
 *
 * @param {array} nums
 * @return number
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
nums = [1, 7, 3, 6, 5, 6]
// nums = [1, 2, 3]
console.log(pivotIndex(nums))

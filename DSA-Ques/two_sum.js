var twoSum = (nums, target) => {
  const map = getMap(nums) /* Time O(N) | Space O(N) */

  return getSum(nums, target, map) /* Time O(N) */
}

const getMap = (nums, map = new Map()) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    map.set(nums[index], index) /* Space O(N) */
  }

  return map
}

const getSum = (nums, target, map) => {
  for (let index = 0; index < nums.length; index++) {
    /* Time O(N) */
    const complement = target - nums[index]
    const sumIndex = map.get(complement)

    const isTarget = map.has(complement) && map.get(complement) !== index
    if (isTarget) return [index, sumIndex]
  }

  return [-1, -1]
}
const pattern = [2, 7, 11, 15]

console.log(twoSum(pattern, 9)) // [0,1]

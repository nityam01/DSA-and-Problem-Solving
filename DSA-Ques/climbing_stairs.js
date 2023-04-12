/**
 *
 * Ques: https://leetcode.com/problems/climbing-stairs/description/
 * Solution: https://www.youtube.com/watch?v=Y0lT9Fck7qI
 *
 *
 * @param {number} n No. of stairs
 * @returns number - No. of ways to climb the stairs
 *
 * @description - To solve this first of all you have to have a understanding of what you are stying to solve
 * in this their a no. of stairs as input and we can take 1 or two steps at a time to reach the top of the stairs and we have to find the no. of ways to reach the top of the stairs
 *
 * now draw a tree diagram of the no. of ways to reach the top of the stairs as:
 * 0 -> 1, 2 // 0 is the starting point and 1, 2 are the steps we can take
 * 1 -> 2, 3 // 1 is the starting point and 2, 3 are the steps we can take   ||  2 -> 3, 4 // 2 is the starting point and 3, 4 are the steps we can take
 * do it till the end and check if you will reach the top of the stairs and reject the paths which are exceding the top of the stairs
 *
 * when you draw you will find their are lot of commen paths in the tree diagram so we can use dynamic programming to solve this problem
 *
 * bottom up approach:
 */

var climbStairs = function (n) {
  let ptOne = 1,
    ptTwo = 1,
    temp

  for (let i = 0; i < n - 1; i++) {
    temp = ptOne
    ptOne = ptOne + ptTwo
    ptTwo = temp
  }

  return ptOne
}

let stair = 3

console.log(climbStairs(stair))

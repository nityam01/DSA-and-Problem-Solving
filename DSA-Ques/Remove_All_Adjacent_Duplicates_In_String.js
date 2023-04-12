/**
 *
 * QUES: https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 *  *
 * @param {string} s
 * @return {string}
 *
 * @description - Solve it using stack data structure: as you can see we have a string and we havet to find sting which are continuous duplicate i.e. aa, bb, cc and remove them
 *
 * check if stack contain the character if yes then pop it else push it
 * when we are done with the loop we will have the string ( join the stack ) without the duplicate characters
 */
var removeDuplicates = function (str) {
  if (str.length <= 1) return ''
  let stack = []

  for (let i = 0; i < str.length; i++) {
    if (stack[stack.length - 1] === str.charAt(i)) {
      stack.pop()
    } else stack.push(str.charAt(i))
  }

  return stack.join('')
}

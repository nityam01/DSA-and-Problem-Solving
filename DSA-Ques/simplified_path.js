/**
 *
 * Ques: https://leetcode.com/problems/simplify-path/submissions/932611700/
 * Solution: https://www.youtube.com/watch?v=qYlHrAKJfyA
 *
 *
 * @param {string} path
 * @return {string}
 *
 *
 * Data structure: Stack
 * Key points:
 * iterate through the string and store the directory name in a stack
 *
 * if('/') then check if we have previously .. if not then check if our curr is not empty and not '.' then push it to stack
 * if (just a character not '/' then add it to curr)
 */

var simplifyPath = function (path) {
  const stack = []
  // We are going to track '..' as we need to pop if we find ..
  let curr = ''

  for (let char of path + '/') {
    if (char === '/') {
      if (curr === '..') {
        if (stack.length) stack.pop()
      } else if (curr !== '' && curr !== '.') {
        stack.push(curr)
      }
      curr = ''
    } else {
      curr += char
    }

    console.log({ curr, stack })
  }

  console.log(stack)

  return '/' + stack.join('/')
}

let pattern = '/home/'
pattern = '/../abc//../def/'
pattern = '/a//b////c/d//././/..'
// console.log(simplifyPath(pattern))

console.log(pattern.split('/'))

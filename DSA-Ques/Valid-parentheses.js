/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (parens) {
  const legend = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  let stack = []

  // If string length si not even then return false as not all brackets are going to be complete close
  // if (parens.length % 2 !== 0) return false

  for (let char of parens) {
    if (legend[char]) {
      stack.push(char)
    } else {
      if (legend[stack.pop()] !== char) return false
    }
  }
  return stack.length === 0
}

let s
// s= "()"
s = '()[]{}'
console.log(isValid(s))

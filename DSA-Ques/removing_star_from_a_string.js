var removeStars = function (s) {
  const stack = []

  for (let char of s) {
    if (char === '*') {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return stack.join('')
}

let pattern = 'leet**cod*e'

console.log(removeStars(pattern))

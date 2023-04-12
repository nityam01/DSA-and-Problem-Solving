var maxProfit = function (prices) {
  let lft = 0,
    ryt = 1
  let maxProfit = 0

  while (ryt < prices.length) {
    if (prices[lft] < prices[ryt]) {
      let profit = prices[ryt] - prices[lft]
      maxProfit = Math.max(maxProfit, profit)
    } else {
      lft = ryt
    }
    ryt += 1
  }

  return maxProfit
}

let prices = [7, 1, 5, 3, 6, 4]
// console.log(prices.length)
console.log(maxProfit(prices))

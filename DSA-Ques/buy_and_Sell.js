/**
 *
 * Ques: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * Solution: https://www.youtube.com/watch?v=1pkOgXD63yU
 *
 *
 * @param {number[]} prices
 * @return {number}
 *
 * it has a simple solution you can just think of 2 variables one is rytPt = sell and other is lftPt = buy
 * draw a graph for values as you see if lftPt is greater than rytPt then move the rytPt to the next value and lftPt to the rytPt
 *
 * then chek if lftPt is less than rytPt then calculate the profit and update the maxProfit and move the rytPt to the next value
 * and again check if lftPt is less than rytPt then calculate the profit and update the maxProfit and move the rytPt to the next value
 * do it till the end of the array
 *
 * you will get the max value of the profit
 */
function maxProfit(prices) {
  if (prices.length <= 1) {
    return 0
  }
  let lft = 0,
    ryt = 1
  let maxProfit = 0

  while (ryt < prices.length) {
    if (prices[lft] < prices[ryt]) {
      maxProfit = Math.max(maxProfit, prices[ryt] - prices[lft])
    } else {
      lft = ryt
    }
    ryt += 1
  }

  return maxProfit
}

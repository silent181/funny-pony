/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = 0;
    for (var i = 0; i < prices.length - 1; i++) {
        var cur = prices[i];

        for (var j = i + 1; j < prices.length; j++) {
            var next = prices[j];
            var profit = next - cur;
            if (profit > max) {
                max = profit;
            }
        }
    }
    return max;
};
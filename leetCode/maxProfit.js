/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    var max = 0;
    var cost = prices[0];

    for (var i = 1; i < prices.length; i++) {
        var cur = prices[i];
        var profit = cur - cost;

        if (profit < 0) {
            cost = cur;
            continue;
        }

        if (profit > max) {
            max = profit;
        }

    }

    return max;
};

var t = [7, 1, 5, 3, 6, 2, 4];

var MONTHS_PER_YEAR = 12;

var sum = (acc, cur) => acc + cur;

var getInterestByRate = (capital, rate) => capital * rate;

function InterestCalculator(options) {
    this.interests = [];
    this.options = options;
}

InterestCalculator.ratePerYear = 0.032;

InterestCalculator.prototype.showMonthlyInterest = function() {
    console.log(this.interests);
}
/**
 * 计算了复利
 * 若参数isReverse为true，则按本金为0，每个月投pmt来计算
 */
InterestCalculator.prototype.getPV = function(isReverse = false) {
    var { originalPrice, months } = this.options;
    var rate = InterestCalculator.ratePerYear / MONTHS_PER_YEAR;
    var pmt = originalPrice / months;


    for (var i = 0; i < months; i++) {
        var preInterest = this.interests[i - 1] || 0;
        var curCapital = isReverse ? pmt * (i + 1) : originalPrice - pmt * i
        var curInterest = getInterestByRate(preInterest + curCapital, rate);
        this.interests.push(curInterest);
    }

    return originalPrice - this.interests.reduce(sum);
}

var opts = {
    originalPrice: 9999,
    months: 24
}

var ic = new InterestCalculator(opts);

var pv = ic.getPV();
console.log(pv);
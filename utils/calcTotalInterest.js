var monthsPerYear = 12;

var sum = (acc, cur) => acc + cur;

var getInterestByRate = (capital, rate) => capital * rate;

export default function calcTotalInterest(originalPrice, months, interestRate = 0.032) {
    var monthRate = interestRate / monthsPerYear;
    var costPerMonth = originalPrice / months;
    var totalInterest = [];

    for (var i = 0; i < months; i++) {
        var residual = originalPrice - costPerMonth * i;
        var currentInterest = getInterestByRate(residual, monthRate);
        var msg = `第${i + 1}月利息为：${currentInterest}, 剩余金额：${residual}`;
        totalInterest.push(currentInterest);
        console.log(msg);
    }

    return totalInterest.reduce(sum);
}

var result = calcTotalInterest(5999, 24)

console.log(`总利息：`, result);
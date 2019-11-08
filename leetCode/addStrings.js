/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var maxLen = Math.max(len1, len2);
    var carry = 0;
    var res = [];
    var reversed1 = num1.split('').reverse().map(v => +v);
    var reversed2 = num2.split('').reverse().map(v => +v);
    
    for (var i = 0; i < maxLen; i++) {
        var curVal = (reversed1[i] || 0) + (reversed2[i] || 0) + carry;

        if (curVal > 9) {
            carry = 1;
            res.push(curVal - 10);
        } else {
            carry = 0;
            res.push(curVal)
        }
    }

    if (carry === 1) {
        res.push(1);
    }

    return res.reverse().join('');
};

// var s1 = '1'
// var s2 = '1'
// addStrings(s1, s2)
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    var repeat = 1;
    var compressed = [];
    for (var i = 0; i < chars.length; i++) {
        var cur = chars[i];
        var pre = chars[i - 1];

        if (i === 0) {
            compressed.push(cur);
            continue;
        }
        
        if (cur === pre) {
            repeat += 1;
        } else {
            if (repeat === 1) {
                compressed.push(cur);
            } else {
                compressed = compressed.concat(
                    repeat.toString().split('').concat([cur])
                )
                repeat = 1;
            }
        }

        if (i === chars.length - 1 && repeat > 1) {
            compressed = compressed.concat(repeat.toString().split(''))
        }
    }
    // 需要这样赋值，不然提交通不过
    for (var i = 0; i < compressed.length; i++) {
        chars[i] = compressed[i].toString();
    }
    return compressed.length;
};
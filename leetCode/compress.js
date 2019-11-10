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
            // compressed.push(repeat.toString().split(''));
            // compressed.push(cur);
            compressed = compressed.concat(
                repeat.toString().split('').concat([cur])
            )
            repeat = 1;
        }

        if (i === chars.length - 1) {
            compressed.push(repeat.toString().split(''))
        }
    }
    // 需要这样赋值，不然提交通不过
    for (var i = 0; i < compressed.length; i++) {
        chars[i] = compressed[i].toString();
    }
    console.log(compressed);
    return compressed.length;
};

// var input =["a","a","b","b","c","c","c"];
var input =["a","b","b","b","b","b","b","b","b","b","b","b","b"];
compress(input)
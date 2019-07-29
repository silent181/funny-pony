function getSharpedPrefixAndSuffix(prefix, suffix) {
    let fixedPrefix;
    let fixedSuffix;

    if (!prefix) {
        /**
         * 没有低音几号时，加一个8度的高音记号
         */
        fixedPrefix = '';
        fixedSuffix = `${suffix}.`;
    } else if (prefix.length > 1) {
        /**
         * 低音记号多余1个时，减去一个低音记号
         */
        fixedPrefix = prefix.substr(1);
        fixedSuffix = '';
    } else {
        /**
         * 低音记号个数为1
         */
        fixedPrefix = '';
        fixedSuffix = '';
    }

    return [fixedPrefix, fixedSuffix];
}

function getFlatedPrefixAndSuffix(prefix, suffix) {
    let fixedPrefix;
    let fixedSuffix;

    if (!suffix) {
        /**
         * 没有高音几号时，加一个8度的低音记号
         */
        fixedPrefix = `.${prefix}`;
        fixedSuffix = '';
    } else if (suffix.length > 1) {
        /**
         * 高音记号多余1个时，减去一个高音记号
         */
        fixedPrefix = '';
        fixedSuffix = suffix.substr(1);
    } else {
        /**
         * 高音记号个数为1
         */
        fixedPrefix = '';
        fixedSuffix = '';
    }

    return [fixedPrefix, fixedSuffix];
}

module.exports = {
    getSharpedPrefixAndSuffix,
    getFlatedPrefixAndSuffix
}
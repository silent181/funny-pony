var idList = [
    {
        id: 1,
        text: 'foo'
    },
    {
        id: 2,
        text: 'bar'
    },
    {
        id: 3,
        text: 'baz'
    }
    // ...
]

var priceRangeList = [
    {
        min: 0,
        max: 10,
        text: 'foo'
    },
    {
        min: 11,
        max: 30,
        text: 'bar'
    },
    {
        min: 31,
        max: 50,
        text: 'baz'
    },
]

// var getParam = (list, sign, field) => {
//     return list.reduce((acc, cur, index, arr) => {
//         return `${acc}${cur[field]}${index == arr.length - 1 ? '' : sign}`
//     }, '');
// }

var makeJoinStrFromArrayReducer = (sign, transformer) => (acc, cur, index, arr) => {
    // debugger
    return `${acc}${transformer(cur)}${index == arr.length - 1 ? '' : sign}`
}

// var joinIds = makeJoinStrFromArrayReducer(',', 'id');
var joinPriceRanges = makeJoinStrFromArrayReducer(',', item => {
    // debugger
    return `${item.min}-${item.max}`
});

var res = priceRangeList.reduce(joinPriceRanges, '')

console.log(res);



var getParam = list => {
    const joinIds = magic('id', ',');
    return list.reduce(joinIds, '');
}

var magic = (transformer, sign) => (acc, cur, index, arr) => {
    return `${acc}${transformer(cur)}${index === arr.length  - 1 ? '' : sign}`
}

var getParam = list => {
    const joinIds = magic('id', ',');
    const joinPriceRanges = magic(item => `${item.min}-${item.max}`, ',')
    // return list.reduce(joinIds, '');
    debugger
    return list.reduce(joinPriceRanges, '');
}

var res = getParam(priceRangeList);

console.log(res);
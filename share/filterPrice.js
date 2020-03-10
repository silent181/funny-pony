var isPreheat = true;

/**
 * 需求1：价格取pPrice，取不到就取plusPrice，否则隐藏该商品
 * 
 * 
 * 需求2： 预热期价格取pPrice，取不到就取plusPrice，否则隐藏该商品
 * 高潮期价格取plusPrice，取不到就取spPrice，否则隐藏该商品
 */
var list = [
    {
        id: 1,
        pPrice: 2,
        plusPrice: 3,
        spPrice: 4
    },
    {
        id: 2,
        pPrice: 3,
    },
    {
        id: 3,
        plusPrice: 2,
    },
    {
        id: 4,
        spPrice: 3,
    },
    // 所有价格均无（空字符串）
    {
        id: 5,
        pPrice: '',
        plusPrice: '',
        spPrice: ''
    }
]

var filterPrice = list => {

    return list.filter(l => l.pPrice || l.plusPrice);
}

var makePropertyFilter = (filterEvery, ...props) => item => {
    const filterFn = prop => item[prop];

    return filterEvery ? props.some(filterFn) : props.every(filterFn);
}

var filterPrice = (list, isPreheat) => {

    const filterPreheat = makePropertyFilter(false, 'pPrice', 'plusPrice');
    const filterClimax = makePropertyFilter(false, 'plusPrice', 'spPrice');

    return list.filter(isPreheat ? filterPreheat : filterClimax);
}

// var res = filterPrice(list, isPreheat);
var res = filterPrice(list, false);

console.log(res);

// y = f(x)














































// 正常版
// var filterPrice = list => {
//     return list.filter(l => l.pPrice || l.plusPrice)
// }

var filterPrice = (list, isPreheat) => {
    return list.filter(l => {
        return isPreheat ? l.pPrice || l.plusPrice : l.plusPrice || l.spPrice;
    });
}

// 升级版
var filterPrice = (list, isPreheat) => {
    const preheatFilter = item => item.pPrice && item.plusPrice;
    const climaxFilter = item => item.plusPrice || item.spPrice;

    return list.filter(isPreheat ? preheatFilter : climaxFilter);
}

// 终极版pro
var makePropertyFilter = (filterEvery, ...props) => item => {
    const filterFn = prop => item[prop];
    return filterEvery ? props.every(filterFn) : props.some(filterFn);
}

var filterPrice = (list, isPreheat) => {
    const preheatFilter = makePropertyFilter(false, 'pPrice', 'plusPrice');
    const climaxFilter = makePropertyFilter(false, 'plusPrice', 'spPrice');

    return list.filter(isPreheat ? preheatFilter : climaxFilter);
}



var result = filterPrice(list, true); // 1 3 4
console.log(result);

// y = f(g(x))
// y = f(g(h(x)))
// x => h => g => f ==== y

// y = compose(f,g,h)(x)
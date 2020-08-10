var list = [
    {
        age: 23,
        name: 'jack',
        salary: 1000
    },
    {
        age: 24,
        name: 'bob',
        salary: 2000
    },
    {
        age: 25,
        name: 'marry',
        salary: 3000
    },
    {
        age: 26,
        name: 'tom',
        salary: 4000
    },
    {
        name: 'no age',
        salary: 5000
    },
]

const options = [
    {
        key: 'boss',
        val: 'robin'
    },
    {
        key: 'title',
        val: 'doctor'
    },
    {
        key: 'salary',
        val: item => {
            const { age, salary } = item;
            return age ? age * 10 + salary : salary;
        }
    },
    {
        key: 'age',
        val: 222222,
        overwritten: false
    }
]

function makeAddKeyForList(...args) {
    const { key, val, overwritten, keyValues } = getArguments(args);
    // console.log(key);
    // console.log(val);
    // console.log(overwritten);
    console.log(keyValues);

    return (list = []) => {
        return list.map((item, index, array) => {
            if (keyValues.length) {
                const addOnProps = keyValues.reduce(
                    (props, { key, val, overwritten }) => {
                        if (canSkipKey(overwritten, item, key)) {
                            return props;
                        }

                        const value = getValue(val, item, index, array);
                        return {
                            ...props,
                            [key]: value
                        }
                    },
                    {}
                );

                return {
                    ...item,
                    ...addOnProps
                }
            } else {
                if (canSkipKey(overwritten, item, key)) {
                    return item;
                }

                const value = getValue(val, item, index, array);
                return {
                    ...item,
                    [key]: value
                }
            }
        })
    }
}

function canSkipKey(overwritten, item, key) {
    return !overwritten && item[key] != null
}

function getValue(value, item, index, array) {
    return isFunction(value) ? value(item, index, array) : value;
}

function getArguments(args) {
    let key;
    let val;
    let overwritten;
    let keyValues = [];

    if (Array.isArray(args[0])) {
        keyValues = args[0].map(a => {
            return {
                ...a,
                overwritten: a.overwritten !== false
            }
        });
    } else {
        [key, val, overwritten] = args;
    }

    return {
        key,
        val,
        overwritten: overwritten !== false,
        keyValues
    }
}

function isFunction(input) {
    return typeof input === 'function';
}

function isObject(input) {
    return Object.prototype.toString.call(input) === '[object, Object]';
}

// var addBoss = makeAddKeyForList('boss', 'robin')
// var addTitle = makeAddKeyForList('title', 'doctor')
// var addAge = makeAddKeyForList('age', 1111, false)
var comprehensiveFunc = makeAddKeyForList(options)
var res = comprehensiveFunc(list);
// var res = compose(
//     addAge,
//     addBoss,
//     addTitle
// )(list);

console.log(res);
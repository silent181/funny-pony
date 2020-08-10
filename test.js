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

function makeAddPropForList(...args) {
    const { key, val, overwritten, keyValues } = getArguments(args);
    const hasMultipleKvs = keyValues.length > 0;

    return (list = []) => list.map((item, index, array) => {
        if (hasMultipleKvs) {
            const addedProps = keyValues.reduce(
                (props, { key, val, overwritten }) => getNewItem(
                    item,
                    key,
                    val,
                    overwritten,
                    index,
                    array,
                    props
                ),
                {}
            );
            return {
                ...item,
                ...addedProps
            };
        }

        return getNewItem(
            item,
            key,
            val,
            overwritten,
            index,
            array,
        );
    })
}

// 若props传一个对象，则表示有多条prop，在keyValues.reduce方法里执行
function getNewItem(
    item,
    key,
    val,
    overwritten,
    index,
    array,
    props
) {
    const canSkipKey = !overwritten && item[key] != null;
    const isPropsType = isObject(props);

    if (canSkipKey) {
        return isPropsType ? props : item;
    }

    const value = isFunction(val) ? val(item, index, array) : val;
    const ret = isPropsType ? props : item;

    return {
        ...ret,
        [key]: value
    }
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
    return input && typeof input === 'function';
}

function isObject(input) {
    return Object.prototype.toString.call(input) === '[object Object]';
}

// var addBoss = makeAddPropForList('boss', 'robin')
// var addTitle = makeAddPropForList('title', 'doctor')
// var addAge = makeAddPropForList('age', 1111, false)
var comprehensiveFunc = makeAddPropForList([
    {
        key: 'boss',
        val: 'robin'
    },
    {
        key: 'title',
        val: 'doctor'
    },
    {
        key: 'age',
        val: 222222,
        overwritten: false
    },
    {
        key: 'salary',
        val: item => {
            const { age, salary } = item;
            return age ? age * 10 + salary : salary;
        }
    }
])
var res = comprehensiveFunc(list);
// var res = compose(
//     addAge,
//     addBoss,
//     addTitle
// )(list);

console.log(res);
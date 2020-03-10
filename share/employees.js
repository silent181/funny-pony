var employees = [
    {
        name: 'Jack',
        salary: 2000,
        age: 23
    },
    {
        name: 'Rose',
        salary: 3000,
        age: 33
    },
    {
        name: 'Lebowski',
        salary: 4000,
        age: 43
    },
    {
        name: 'Xiaoming',
        salary: 5000,
        age: 53,
        // boss: 'Richard'
    }
]

var addCompany = (list) => {
    for (let i = 0; i < list.length; i++) {
        list[i].company = 'JD';
    }
    return list;
}

var addCompany = (list) => {
    return list.map(item => {
        return {
            ...item,
            company: 'JD'
        }
    });
}

// var addKeyForList = (list, key, value) => {
//     return list.map(item => {
//         return {
//             ...item,
//             [key]: value
//         }
//     });
// }

// reselect框架

var makeAddKeyForList = (key, value) => (list) => {
    return list.map((item, index) => {
        return {
            ...item,
            [key]: typeof value === 'function' ? value(item, index, list) : value
        }
    });
}

// var addCompany = makeAddKeyForList('company', 'jd');
// var addBoss = makeAddKeyForList('boss', 'Richard');
var raiseSalary = makeAddKeyForList('salary', item => {
    return item.age * 10 + item.salary;
})

// var res = addCompany(employees);
var res = raiseSalary(employees);
console.log(res);











































// 乞丐版
var addCompany = (list) => {
    for (let i = 0; i < list.length; i++) {
        list[i].company = 'JD';
    }
    return list;
}

// 升级版
var addKeyForList = (list, value, key) => {
    return list.map(item => {
        return {
            ...item,
            [key]: value
        }
    });
}

// 终极版
var makeAddKeyForList = (key, value) => (list) => {
    return list.map((item, index) => {
        return {
            ...item,
            [key]: typeof value === 'function' ? value(item, index) : value
        }
    });
}

var addCompany = makeAddKeyForList('company', 'JD');
var addBoss = makeAddKeyForList('company', 'Richard');

var raiseSalary = makeAddKeyForList('salary', ({ age, salary }) => {
    return 10 * age + salary;
});

// var result = addCompany(employees, 'JD')
// var result1 = addKeyForList(employees, 'JD', 'company');
// var result1 = addKeyForList(employees, 'Richard', 'boss')

// var result1 = addCompany(employees);
var result = raiseSalary(employees)
// var result = addCompany(employees, 'tmall')
console.log(result);
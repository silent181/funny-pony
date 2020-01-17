async function run() {
    var res = await foo();
    console.log(res);
    debugger

    // Promise.resolve(foo()).then(res => {
    //     console.log(res);
    //     debugger
    // })
}

function genP1() {
    return new Promise(resolve => resolve('p1'))
}

function genP2() {
    return new Promise(resolve => resolve('p2'))
}

function genAsyncP2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('async p2')
        })
    })
}

function foo() {
    return genP1().then(data => {
        console.log('p1 then');
        debugger
        return genAsyncP2().then(data => {
            console.log('p2 then');
            debugger
            return data
        })
    })
}

run()

function genAsyncP2() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('async p2')
        })
    })
}

function genAsyncP1() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('async p1')
        })
    })
}
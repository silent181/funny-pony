// console.dir(Redux);

// const { createStore } = Redux;
const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    };

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener();
        });
    };

    dispatch({})

    return {
        getState,
        subscribe,
        dispatch
    };
}


const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

const store = createStore(counter);

const render = () => {
    document.querySelector('#con').innerHTML = store.getState();
}
render();
store.subscribe(render);
document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
})
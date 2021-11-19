import { createStore, combineReducers } from 'redux';


const appReducer = combineReducers({
    value,
    showLabel
});

function value(prevState = 0, action) {
    switch (action.type) {
        case 'increment':
            return prevState + 1;
        case 'decrement':
            return prevState - 1;
        default:
            return prevState;
    }
}

function showLabel(prevState = true, action) {
    switch (action.type) {
        case 'show-label':
            return action.payload;
        default:
            return prevState;
    }
}

function increment() {
    return {
        type: 'increment'
    }
}

function decrement() {
    return {
        type: 'decrement'
    }
}

function setShowLabel(payload) {
    return {
        type: 'show-label',
        payload: payload
    };
}

const store = createStore(appReducer);

export default store;

export {
    increment,
    decrement,
    setShowLabel
}

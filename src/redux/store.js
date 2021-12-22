import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const appReducer = combineReducers({
    value,
    showLabel,
    dataInfo
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

function dataInfo(state = {
    data: [],
    error: '',
    loading: false
}, action) {
    switch (action.type) {
        case 'set-data':
            return {
                ...state,
                data: action.payload
            }
        case 'loading':
            return {
                ...state,
                loading: action.payload
            }
        case 'error':
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

function setData(data) {
    return {
        type: 'set-data',
        payload: data
    };
}


function setLoading(isLoading) {
    return {
        type: 'loading',
        payload: isLoading
    };
}

function setError(error) {
    return {
        type: 'error',
        payload: error
    };
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

const store = createStore(appReducer, applyMiddleware(thunk));

export default store;

export {
    increment,
    decrement,
    setShowLabel,
    setData,
    setLoading,
    setError
}

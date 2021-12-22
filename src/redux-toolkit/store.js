import { configureStore } from '@reduxjs/toolkit'
import valueReducer from './valueReducer';
import dataInfoReducer from './dataInfoReducer';
import showLabelReducer from './showLabelReducer';

const store = configureStore({
    reducer: {
        value: valueReducer,
        dataInfo: dataInfoReducer,
        showLabel: showLabelReducer
    }
});

export default store;
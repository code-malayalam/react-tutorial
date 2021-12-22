import { createSlice } from '@reduxjs/toolkit'

const showLabelReducer = createSlice({
    name: 'showLable',
    initialState: true,
    reducers:  {
        setShowLabel: (state, action) => {
            return action.payload
        }
    },
});

export const {setShowLabel} = showLabelReducer.actions;


export default showLabelReducer.reducer;

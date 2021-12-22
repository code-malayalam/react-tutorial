import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const getDataInfo =  createAsyncThunk('api/data', () => {
    return axios.get('http://localhost:8090/data')
        .then((response) => {
            return response.data;
        });

});

const deleteItem =  createAsyncThunk('api/delete', (id) => {
    return axios.get('http://localhost:8090/delete/' + id)
        .then((response) => {
            return response.data;
        });
});

function deleteAndUpdate(id) {
    return function (dispatch) {
        dispatch(deleteItem(id))
            .then(() => {
                dispatch(getDataInfo());
            });
    }
}



const dataInfoSlice = createSlice({
    name: 'data',
    initialState: {
        data: [],
        error: '',
        loading: false
    },
    extraReducers: {
        [getDataInfo.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        [getDataInfo.pending]: (state) => {
            state.loading = true;
        },
        [getDataInfo.rejected]: (state) => {
            state.loading = false;
            state.error = "Some Error occured"
        },
        [deleteItem.fulfilled]: (state) => {
            state.loading = false;
        },
        [deleteItem.pending]: (state) => {
            state.loading = true;
        },
        [deleteItem.rejected]: (state) => {
            state.loading = false;
            state.error = "Some Error occured"
        },
        
    }

});

export {getDataInfo, deleteItem, deleteAndUpdate};

export default dataInfoSlice.reducer;
import axios from "axios";
import { setData, setError, setLoading } from "./store";


function getDataInfo() {
    return function (dispatch) {
        dispatch(setLoading(true));
        return axios.get('http://localhost:8090/data')
            .then((response) => {
                dispatch(setData(response.data));
                dispatch(setLoading(false));
            })
            .catch(() => {
                dispatch(setLoading(false));
                dispatch(setError('An Error Occured'));
            });
    
    }
    
} 

function deleteItem(id) {
    return function (dispatch) {
        dispatch(setLoading(true));
        return axios.get('http://localhost:8090/delete/' + id)
            .then(() => {
                dispatch(setLoading(false));
            })
            .catch(() => {
                dispatch(setLoading(false));
                dispatch(setError('An Error Occured'));
            });
    
    }
    
} 

function deleteAndUpdate(id) {
    return function (dispatch) {
        
        dispatch(deleteItem(id))
            .then(() => {
                dispatch(getDataInfo());
            });
    }
}

export {getDataInfo, deleteItem, deleteAndUpdate};
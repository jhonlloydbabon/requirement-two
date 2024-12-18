import {FETCH_RESULT_SUCCESS, FETCH_RESULT_LOADING, FETCH_RESULT_ERROR} from "../ActionTypes";
import axios from 'axios';

export const fetchCompanyUser = () =>{
    return async dispatch => {
        try {
            const result = await axios.get('http://localhost:5000/api/v1/companyUser/');
            dispatch({type:FETCH_RESULT_SUCCESS, payload:result.data})
        } catch (err) {
            dispatch({type:FETCH_RESULT_ERROR, error:err})
        }
    }
}
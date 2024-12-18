import { FETCH_RESULT_LOADING, FETCH_RESULT_SUCCESS, FETCH_RESULT_ERROR } from "../ActionTypes";

const reducer = (state = { response:[], isLoading:false }, action) => {
    switch(action.type){
        case FETCH_RESULT_LOADING:
            return {...state, isLoading: true};
        case FETCH_RESULT_SUCCESS:
            return {...state, response:action.payload.response, isLoading:false};
        case FETCH_RESULT_ERROR:
            return {...state, response:action.error, isLoading:false};
        default:
            return state;
    }
}

export default reducer;
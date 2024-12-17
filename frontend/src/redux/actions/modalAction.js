import {OPEN_MODAL, CLOSE_MODAL} from "../ActionTypes";

export const openModal = () =>{
    return dispatch => {
        dispatch({type:OPEN_MODAL, payload:true});
    }
}

export const closeModal = () =>{
    return dispatch => {
        dispatch({type:CLOSE_MODAL, payload:false});
    }
}
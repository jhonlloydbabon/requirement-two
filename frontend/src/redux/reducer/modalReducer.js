import { OPEN_MODAL, CLOSE_MODAL } from "../ActionTypes";

const reducer = (state = { status: false }, action) => {
    switch(action.type){
        case OPEN_MODAL:
            return {...state, status:action.payload};
        case CLOSE_MODAL:
            return {...state, status:action.payload};
        default:
            return state;
    }
}

export default reducer;
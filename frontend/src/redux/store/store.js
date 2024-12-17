import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

// REDUCER
import modalReducer from "../reducer/modalReducer";

const store = configureStore({
    reducer: {
        modal: modalReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
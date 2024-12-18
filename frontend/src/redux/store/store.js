import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";

// REDUCER
import modalReducer from "../reducer/modalReducer";
import companyUserReducer from "../reducer/companyUserReducer";

const store = configureStore({
    reducer: {
        modal: modalReducer,
        companyUser: companyUserReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
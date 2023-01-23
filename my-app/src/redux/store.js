import  thunk  from "redux-thunk"
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import {reducer as productReducer} from "./reducer"
import {reducer as authReducer} from "./Auth/reducer"

const rootreducer=combineReducers({
    productReducer,
    authReducer
})




export const store =legacy_createStore(rootreducer,applyMiddleware(thunk))
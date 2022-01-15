import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from "redux";

 const totalReducers = combineReducers({
    loadingStore: loadingReducer,
 })

 const store = createStore(totalReducers)

 export default store

 export type AppStoreType = ReturnType<typeof totalReducers>

 // @ts-ignore
 window.store = store // for dev

import { createStore } from "redux";
import mainReducer from "./Reducers";
// import thunk from "redux-thunk";
// import {AsyncStorage} from "react-native";

// var initArray=[]
// AsyncStorage.set("todos",JSON.stringify(initArray));

var store = createStore(mainReducer);

// store.dispatch(initStoreThunk);

export default store


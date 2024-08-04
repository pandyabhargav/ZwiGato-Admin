import { combineReducers } from "redux";
import dataReducer from "./Reducer/CrudReducer";


const rootReducer = combineReducers({
   dataReducer,
});


export default rootReducer;
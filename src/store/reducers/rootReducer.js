import { combineReducers } from "redux";
import DataTableReducers from "./DataTableReducers";

const rootReducer = combineReducers({
  dataTable: DataTableReducers,
});

export default rootReducer;

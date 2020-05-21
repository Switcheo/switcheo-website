import { combineReducers } from "redux";
import { RootState } from "./types";
import Content from "./content/reducers";


export default combineReducers<RootState>({
  Content,
});

import { combineReducers } from "redux";
import { RootState } from "./types";
import Content from "./content/reducers";
import Documents from "./documents/reducers";


export default combineReducers<RootState>({
  Content, Documents,
});

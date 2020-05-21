import { createStore } from "redux";
import { RootState } from "../../client/store/types";
import combinedReducers from '../../client/store/reducers';

const ServerStore = createStore<RootState>(combinedReducers);

export default ServerStore;
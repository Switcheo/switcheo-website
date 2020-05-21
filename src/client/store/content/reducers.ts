import moment from "moment";
import { ContentActionTypes } from "./actions";
import { ContentState } from "./types";

const initial_state: ContentState = {
  timestamp: undefined,
  press: [],
  team: [],
};

const reducer = (state: ContentState = initial_state, actions: any) => {
  switch (actions.type) {
    case ContentActionTypes.UPDATE:
      return {
        ...state,
        [actions.payload.key]: actions.payload.value,
        timestamp: moment(),
      };
    default:
      return state;
  };
}

export default reducer;

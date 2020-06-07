import moment from "moment";
import { DocumentActionTypes } from "./actions";
import { DocumentState, DocumentUpdateProps } from "./types";

const initial_state: DocumentState = {
  timestamp: undefined,
  documents: {},
};

const reducer = (state: DocumentState = initial_state, actions: any) => {
  switch (actions.type) {
    case DocumentActionTypes.UPDATE:
      const updateProps: DocumentUpdateProps = actions.payload;
      return {
        ...state,
        timestamp: moment(),
        documents: {
          ...updateProps,
        },
      };
    default:
      return state;
  };
}

export default reducer;

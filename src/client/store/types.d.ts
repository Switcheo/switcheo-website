import { ContentState } from "./content/types"
import { DocumentState } from "./documents/types";
export interface RootState {
  Content: ContentState;
  Documents: DocumentState;
};
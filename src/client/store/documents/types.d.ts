import { Document as ContentfulDocument } from "@contentful/rich-text-types";

export type DocumentState = {
  timestamp?: moment.Moment;
  documents: {
    [index: string]: ContentfulDocument;
  },
};
export type DocumentUpdateProps = {
  [index: string]: ContentfulDocument;
};
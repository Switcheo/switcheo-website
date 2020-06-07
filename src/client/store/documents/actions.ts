import { DocumentUpdateProps } from "./types";

export enum DocumentActionTypes {
  UPDATE
};

export function update(payload: DocumentUpdateProps) {
  return {
    type: DocumentActionTypes.UPDATE,
    payload
  }
};
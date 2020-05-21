import { ContentUpdateProps } from "./types";

export enum ContentActionTypes {
  UPDATE
};

export function update(payload: ContentUpdateProps) {
  return {
    type: ContentActionTypes.UPDATE,
    payload
  }
};
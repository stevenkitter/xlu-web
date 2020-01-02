import { DATA_REQUESTED } from "../constant/action-types";

export function getData() {
  return { type: DATA_REQUESTED };
}

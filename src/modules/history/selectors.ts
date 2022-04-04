import { moduleName } from "./module";
import { createSelector } from "@reduxjs/toolkit";
import { HistorySchema } from "./types/history.types";

const historyModule = (state: any) => state[moduleName];

export const placeItemsSelector = createSelector(
  [historyModule],
  (state: HistorySchema) => state.places
);

import { HistoryItem, HistorySchema } from "./types/history.types";
import { HistoryState } from "./schema";
import { AnyAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions";
import { unionWith, isEqual, filter } from "lodash";

const reducer = (
  state: HistorySchema = HistoryState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case actionTypes.ADD_HISTORY_ITEM: {
      const { item }: { item: HistoryItem } = payload;
      return {
        ...state,
        items: unionWith(state.items, [item], isEqual),
      };
    }
    case actionTypes.REMOVE_HISTORY_ITEM: {
      const { id }: { id: string } = payload;

      return {
        ...state,
        items: filter(state.items, (item: HistoryItem) => item.uuid !== id),
      };
    }

    case actionTypes.CLEAR_HISTORY: {
      return {
        ...state,
        items: [],
      };
    }
    default:
      return state;
  }
};

export default reducer;

import { HistoryItem, HistorySchema } from "./types/history.types";
import { HistoryState } from "./schema";
import { AnyAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions";
import { unionWith, isEqual, filter } from "lodash";
import { PlaceItem } from "../../helpers/api/WeatherApi";

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

    case actionTypes.SET_HISTORY_ITEMS: {
      const { items }: { items: HistoryItem[] } = payload;
      return {
        ...state,
        items,
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

    case actionTypes.ADD_PLACE_ITEM: {
      const { item }: { item: PlaceItem } = payload;
      return {
        ...state,
        places: unionWith(state.places, [item], isEqual),
      };
    }

    case actionTypes.SET_PLACE_ITEMS: {
      const { items }: { items: HistoryItem[] } = payload;
      return {
        ...state,
        places: items,
      };
    }

    case actionTypes.REMOVE_PLACE_ITEM: {
      const { woeid }: { woeid: number } = payload;

      return {
        ...state,
        places: filter(state.places, (item: PlaceItem) => item.woeid !== woeid),
      };
    }

    case actionTypes.CLEAR_PLACES: {
      return {
        ...state,
        places: [],
      };
    }

    default:
      return state;
  }
};

export default reducer;

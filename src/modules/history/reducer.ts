import { HistorySchema } from "./types/history.types";
import { HistoryState } from "./schema";
import { AnyAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions";
import { filter, concat, uniqBy } from "lodash";
import { PlaceItem } from "../../helpers/api/WeatherApi";

const reducer = (
  state: HistorySchema = HistoryState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case actionTypes.ADD_PLACE_ITEM: {
      const { item }: { item: PlaceItem | PlaceItem[] } = payload;
      return {
        ...state,
        places: uniqBy(
          concat(state.places, item),
          (place: PlaceItem) => place.woeid
        ),
      };
    }

    case actionTypes.SET_PLACE_ITEMS: {
      const { items }: { items: PlaceItem[] } = payload;
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

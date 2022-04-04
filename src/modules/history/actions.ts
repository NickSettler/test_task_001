import { moduleName } from "./module";
import { HistoryItem } from "./types/history.types";
import { PlaceItem } from "../../helpers/api/WeatherApi";

export const actionTypes = {
  ADD_HISTORY_ITEM: `${moduleName}/ADD_HISTORY_ITEM`,
  SET_HISTORY_ITEMS: `${moduleName}/SET_HISTORY_ITEMS`,
  REMOVE_HISTORY_ITEM: `${moduleName}/REMOVED_HISTORY_ITEM`,
  CLEAR_HISTORY: `${moduleName}/CLEAR_HISTORY`,
  ADD_PLACE_ITEM: `${moduleName}/ADD_PLACE_ITEM`,
  SET_PLACE_ITEMS: `${moduleName}/SET_PLACE_ITEMS`,
  REMOVE_PLACE_ITEM: `${moduleName}/REMOVED_PLACE_ITEM`,
  CLEAR_PLACES: `${moduleName}/CLEAR_PLACES`,
};

export const addHistoryItem = (item: HistoryItem) => ({
  type: actionTypes.ADD_HISTORY_ITEM,
  payload: {
    item,
  },
});

export const setHistoryItems = (items: HistoryItem[]) => ({
  type: actionTypes.SET_HISTORY_ITEMS,
  payload: {
    items,
  },
});

export const removeHistoryItem = (query: string) => ({
  type: actionTypes.REMOVE_HISTORY_ITEM,
  payload: {
    query,
  },
});

export const clearHistory = () => ({
  type: actionTypes.CLEAR_HISTORY,
});

export const addPlaceItem = (item: PlaceItem) => ({
  type: actionTypes.ADD_PLACE_ITEM,
  payload: {
    item,
  },
});

export const setPlaceItems = (items: PlaceItem[]) => ({
  type: actionTypes.SET_PLACE_ITEMS,
  payload: {
    items,
  },
});

export const removePlaceItem = (woeid: number) => ({
  type: actionTypes.REMOVE_PLACE_ITEM,
  payload: {
    woeid,
  },
});

export const clearPlaces = () => ({
  type: actionTypes.CLEAR_PLACES,
});

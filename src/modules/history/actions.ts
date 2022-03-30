import { moduleName } from "./module";
import { HistoryItem } from "./types/history.types";

export const actionTypes = {
  ADD_HISTORY_ITEM: `${moduleName}/ADD_HISTORY_ITEM`,
  SET_HISTORY_ITEMS: `${moduleName}/SET_HISTORY_ITEMS`,
  REMOVE_HISTORY_ITEM: `${moduleName}/REMOVED_HISTORY_ITEM`,
  CLEAR_HISTORY: `${moduleName}/CLEAR_HISTORY`,
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

export const removeHistoryItem = (id: string) => ({
  type: actionTypes.REMOVE_HISTORY_ITEM,
  payload: {
    id,
  },
});

export const clearHistory = () => ({
  type: actionTypes.CLEAR_HISTORY,
});

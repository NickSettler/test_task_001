import { moduleName } from "./module";
import { PlaceItem } from "../../helpers/api";

export const actionTypes = {
  ADD_PLACE_ITEM: `${moduleName}/ADD_PLACE_ITEM`,
  SET_PLACE_ITEMS: `${moduleName}/SET_PLACE_ITEMS`,
  REMOVE_PLACE_ITEM: `${moduleName}/REMOVED_PLACE_ITEM`,
  CLEAR_PLACES: `${moduleName}/CLEAR_PLACES`,
};

export const addPlaceItem = (item: PlaceItem | PlaceItem[]) => ({
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

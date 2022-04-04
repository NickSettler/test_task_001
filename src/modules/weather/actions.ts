import { moduleName } from "./module";
import { PlaceItem } from "../../helpers/api/WeatherApi";

export const actionTypes = {
  SET_SELECTED_PLACE: `${moduleName}/SET_SELECTED_PLACE`,
};

export const setSelectedPlace = (place: PlaceItem) => ({
  type: actionTypes.SET_SELECTED_PLACE,
  payload: {
    place,
  },
});

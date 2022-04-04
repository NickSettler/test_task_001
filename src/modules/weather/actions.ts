import { moduleName } from "./module";
import { PlaceItem, WeatherItem } from "../../helpers/api/WeatherApi";

export const actionTypes = {
  SET_SELECTED_PLACE: `${moduleName}/SET_SELECTED_PLACE`,
  SET_IS_WEATHER_ITEM_LOADING: `${moduleName}/SET_IS_WEATHER_ITEM_LOADING`,
  SET_CURRENT_WEATHER_ITEM: `${moduleName}/SET_CURRENT_WEATHER_ITEM`,
};

export const setSelectedPlace = (place: PlaceItem) => ({
  type: actionTypes.SET_SELECTED_PLACE,
  payload: {
    place,
  },
});

export const setIsWeatherItemLoading = (isLoading: boolean) => ({
  type: actionTypes.SET_IS_WEATHER_ITEM_LOADING,

  payload: {
    isLoading: isLoading,
  },
});

export const setCurrentWeatherItem = (weatherItem: WeatherItem) => ({
  type: actionTypes.SET_CURRENT_WEATHER_ITEM,
  payload: {
    weatherItem: weatherItem,
  },
});

import { WeatherState } from "./schema";
import { AnyAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions";
import { WeatherSchema } from "./types/weather.types";
import { PlaceItem, WeatherItem } from "../../helpers/api/WeatherApi";

const reducer = (
  state: WeatherSchema = WeatherState,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case actionTypes.SET_SELECTED_PLACE: {
      const { place }: { place: PlaceItem } = payload;
      return {
        ...state,
        selectedPlace: place,
      };
    }

    case actionTypes.SET_IS_WEATHER_ITEM_LOADING: {
      const { isLoading }: { isLoading: boolean } = payload;
      return {
        ...state,
        isLoading,
      };
    }

    case actionTypes.SET_CURRENT_WEATHER_ITEM: {
      const { weatherItem }: { weatherItem: WeatherItem[] } = payload;

      return {
        ...state,
        currentWeatherItem: weatherItem,
      };
    }

    default:
      return state;
  }
};

export default reducer;

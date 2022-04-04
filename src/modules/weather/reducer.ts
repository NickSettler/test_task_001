import { WeatherState } from "./schema";
import { AnyAction } from "@reduxjs/toolkit";
import { actionTypes } from "./actions";
import { WeatherSchema } from "./types/weather.types";
import { PlaceItem } from "../../helpers/api/WeatherApi";

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

    default:
      return state;
  }
};

export default reducer;

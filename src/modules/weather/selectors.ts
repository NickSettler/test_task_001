import { moduleName } from "./module";
import { createSelector } from "@reduxjs/toolkit";
import { WeatherSchema } from "./types/weather.types";

const weatherModule = (state: any) => state[moduleName];

export const selectedPlaceSelector = createSelector(
  [weatherModule],
  (state: WeatherSchema) => state.selectedPlace
);

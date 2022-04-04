import { PlaceItem, WeatherItem } from "../../../helpers/api";

export type WeatherDataProps = {
  selectedPlace: PlaceItem | false;
  currentWeatherItem: WeatherItem | false;
  isLoading: boolean;
};

export type WeatherDataHook = {};

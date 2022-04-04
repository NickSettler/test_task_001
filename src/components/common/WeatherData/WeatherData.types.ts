import { PlaceItem, WeatherItem } from "../../../helpers/api/WeatherApi";

export type WeatherDataProps = {
  selectedPlace: PlaceItem | false;
  currentWeatherItem: WeatherItem | false;
  isLoading: boolean;
};

export type WeatherDataHook = {};

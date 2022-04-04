import { PlaceItem, WeatherItem } from "../../../helpers/api/WeatherApi";

export type WeatherSchema = {
  selectedPlace: PlaceItem | false;
  currentWeatherItem: WeatherItem | false;
  isLoading: boolean;
};

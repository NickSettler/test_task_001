import { PlaceItem } from "../../../helpers/api/WeatherApi";

export type WeatherSchema = {
  selectedPlace: PlaceItem | false;
};

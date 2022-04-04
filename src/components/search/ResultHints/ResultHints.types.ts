import { PlaceItem } from "../../../helpers/api/WeatherApi";

export type ResultHintsProps = {
  items: PlaceItem[];
  setSelectedPlace: (place: PlaceItem) => void;
};

export type ResultHintsHook = {
  handleItemClick: (place: PlaceItem) => void;
};

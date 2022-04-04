import React from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";
import { PlaceItem } from "../../../helpers/api/WeatherApi";

export type HistoryDropdownProps = {
  anchorRef: React.RefObject<HTMLElement>;
  historyItems: HistoryItem[];
  placeItems: PlaceItem[];
  open: boolean;
  onClose: () => void;
  selectedPlace: PlaceItem | false;
  setSelectedPlace: (place: PlaceItem) => void;
};

export type HistoryDropdownHook = {
  open: boolean;
  handleItemClick: (place: PlaceItem) => void;
};

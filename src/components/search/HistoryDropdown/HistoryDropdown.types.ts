import React from "react";
import { PlaceItem } from "../../../helpers/api";

export type HistoryDropdownProps = {
  anchorRef: React.RefObject<HTMLElement>;
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

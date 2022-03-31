import React from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";
import { PlaceItem } from "../../../helpers/api/WeatherApi";

export type HistoryDropdownProps = {
  anchorRef: React.RefObject<HTMLElement>;
  historyItems: HistoryItem[];
  placeItems: PlaceItem[];
  open: boolean;
};

export type HistoryDropdownHook = {
  open: boolean;
};

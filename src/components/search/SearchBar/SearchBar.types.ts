import React from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";
import { PlaceItem } from "../../../helpers/api/WeatherApi";

export type SearchBarProps = {
  historyItems: HistoryItem[];
};

export type SearchBarHook = {
  textFieldRef: React.RefObject<HTMLInputElement>;
  searchTerm: string;
  clearSearch: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  dropdownOpen: boolean;
  handleDropdownToggle: () => void;
  handleDropdownClose: () => void;
  filteredHistoryItems: HistoryItem[];
  placesItems: PlaceItem[];
  error: string | false;
};

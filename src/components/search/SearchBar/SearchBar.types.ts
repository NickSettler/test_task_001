import React from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";

export type SearchBarProps = {
  historyItems: HistoryItem[];
};

export type SearchBarHook = {
  textFieldRef: React.RefObject<HTMLInputElement>;
  searchTerm: string;
  clearSearch: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dropdownOpen: boolean;
  handleDropdownToggle: () => void;
  handleDropdownClose: () => void;
  filteredItems: HistoryItem[];
};

import { SearchBarHook, SearchBarProps } from "./SearchBar.types";
import React, { useState } from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";

const useSearchBar = ({ historyItems }: SearchBarProps): SearchBarHook => {
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] =
    useState<HistoryItem[]>(historyItems);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
    setFilteredItems(
      historyItems.filter((item: HistoryItem) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const clearSearch = (): void => {
    setSearchTerm("");
  };

  const handleDropdownToggle = (): void => {
    setDropdownOpen(filteredItems.length ? !dropdownOpen : false);
  };

  const handleDropdownClose = (): void => {
    setDropdownOpen(false);
  };

  return {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    dropdownOpen,
    handleDropdownToggle,
    handleDropdownClose,
    filteredItems,
  };
};

export default useSearchBar;

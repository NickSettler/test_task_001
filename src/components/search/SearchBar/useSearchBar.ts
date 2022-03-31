import { SearchBarHook, SearchBarProps } from "./SearchBar.types";
import React, { useCallback, useState } from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";
import WeatherApi, { PlaceItem } from "../../../helpers/api/WeatherApi";

const useSearchBar = ({ historyItems }: SearchBarProps): SearchBarHook => {
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] =
    useState<HistoryItem[]>(historyItems);
  const [placesItems, setPlacesItems] = useState<PlaceItem[]>([]);

  const getPlaces = useCallback(
    async (term?: string) => {
      const places = await WeatherApi.getInstance().queryPlace(
        searchTerm || term || ""
      );
      setPlacesItems(places);

      if (places.length) setDropdownOpen(true);
      else setDropdownOpen(false);
    },
    [searchTerm]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setFilteredItems(
        historyItems.filter(
          (item: HistoryItem) =>
            item.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        )
      );
      setPlacesItems([]);
    },
    [historyItems]
  );

  const clearSearch = useCallback((): void => {
    setSearchTerm("");
  }, []);

  const handleDropdownToggle = useCallback((): void => {
    setDropdownOpen(filteredItems.length ? !dropdownOpen : false);
  }, [dropdownOpen, filteredItems.length]);

  const handleDropdownClose = useCallback((): void => {
    setDropdownOpen(false);
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      await getPlaces();
    },
    [getPlaces]
  );

  return {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    handleSubmit,
    dropdownOpen,
    handleDropdownToggle,
    handleDropdownClose,
    filteredHistoryItems: filteredItems,
    placesItems,
  };
};

export default useSearchBar;

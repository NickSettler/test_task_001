import { SearchBarHook, SearchBarProps } from "./SearchBar.types";
import React, { useCallback, useEffect, useState } from "react";
import WeatherApi, { PlaceItem } from "../../../helpers/api";

const useSearchBar = ({
  selectedPlace,
  addPlaceItem,
}: SearchBarProps): SearchBarHook => {
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [placesItems, setPlacesItems] = useState<PlaceItem[]>([]);
  const [error, setError] = useState<string | false>(false);

  const getPlaces = useCallback(
    async (term?: string) => {
      const places = await WeatherApi.getInstance().queryPlace(
        searchTerm || term || ""
      );

      if (!places.length) {
        setError("No results found");
        return;
      }

      addPlaceItem(places);

      setPlacesItems(places);

      if (places.length) setDropdownOpen(true);
      else setDropdownOpen(false);
    },
    [addPlaceItem, searchTerm]
  );

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
      setPlacesItems(
        placesItems.filter((item) => item.title.includes(e.target.value))
      );

      if (error) setError(false);
    },
    [error, placesItems]
  );

  const clearSearch = useCallback((): void => {
    setSearchTerm("");
  }, []);

  const handleDropdownToggle = useCallback((): void => {
    setDropdownOpen(!dropdownOpen);
  }, [dropdownOpen]);

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

  useEffect(() => {
    if (selectedPlace) {
      setSearchTerm(selectedPlace.title);
      setPlacesItems([]);
    }
  }, [selectedPlace]);

  return {
    textFieldRef,
    searchTerm,
    clearSearch,
    handleInput,
    handleSubmit,
    dropdownOpen,
    handleDropdownToggle,
    handleDropdownClose,
    placesItems,
    error,
  };
};

export default useSearchBar;

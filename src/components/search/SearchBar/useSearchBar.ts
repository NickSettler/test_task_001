import { SearchBarHook, SearchBarProps } from "./SearchBar.types";
import React, { useCallback, useEffect, useState } from "react";
import WeatherApi, { PlaceItem } from "../../../helpers/api";

const useSearchBar = ({
  selectedPlace,
  addPlaceItem,
}: SearchBarProps): SearchBarHook => {
  const textFieldRef = React.useRef<HTMLInputElement>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");
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
    placesItems,
    error,
  };
};

export default useSearchBar;

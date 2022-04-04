import React from "react";
import { PlaceItem } from "../../../helpers/api";

export type SearchBarProps = {
  selectedPlace: PlaceItem | false;
  addPlaceItem: (placeItem: PlaceItem | PlaceItem[]) => void;
};

export type SearchBarHook = {
  textFieldRef: React.RefObject<HTMLInputElement>;
  searchTerm: string;
  clearSearch: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  placesItems: PlaceItem[];
  error: string | false;
};

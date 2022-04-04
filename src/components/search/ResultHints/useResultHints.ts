import { ResultHintsHook, ResultHintsProps } from "./ResultHints.types";
import { PlaceItem } from "../../../helpers/api/WeatherApi";
import { useCallback } from "react";

const useResultHints = ({
  setSelectedPlace,
}: ResultHintsProps): ResultHintsHook => {
  const handleItemClick = useCallback(
    (place: PlaceItem) => {
      setSelectedPlace(place);
    },
    [setSelectedPlace]
  );

  return {
    handleItemClick,
  };
};

export default useResultHints;

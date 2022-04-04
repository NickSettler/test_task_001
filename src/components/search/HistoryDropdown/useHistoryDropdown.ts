import {
  HistoryDropdownHook,
  HistoryDropdownProps,
} from "./HistoryDropdown.types";
import { useCallback, useEffect, useState } from "react";
import { PlaceItem } from "../../../helpers/api";

const useHistoryDropdown = ({
  open: openProps,
  onClose,
  setSelectedPlace,
}: HistoryDropdownProps): HistoryDropdownHook => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(openProps);
  }, [openProps]);

  const handleItemClick = useCallback(
    (place: PlaceItem): void => {
      setSelectedPlace(place);
      setOpen(false);
      onClose();
    },
    [onClose, setSelectedPlace]
  );

  return {
    open,
    handleItemClick,
  };
};

export default useHistoryDropdown;

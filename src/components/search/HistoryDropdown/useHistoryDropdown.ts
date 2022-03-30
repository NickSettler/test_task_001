import {
  HistoryDropdownHook,
  HistoryDropdownProps,
} from "./HistoryDropdown.types";
import { useEffect, useState } from "react";

const useHistoryDropdown = ({
  open: openProps,
}: HistoryDropdownProps): HistoryDropdownHook => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    setOpen(openProps);
  }, [openProps]);

  return {
    open,
  };
};

export default useHistoryDropdown;

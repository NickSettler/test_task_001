import React from "react";
import { HistoryItem } from "../../../modules/history/types/history.types";

export type HistoryDropdownProps = {
  anchorRef: React.RefObject<HTMLElement>;
  items: HistoryItem[];
  open: boolean;
};

export type HistoryDropdownHook = {
  open: boolean;
};

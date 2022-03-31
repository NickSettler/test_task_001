import { styled } from "@mui/material";

export const SearchBarForm = styled("form")({
  display: "flex",
  flexDirection: "row",
  alignItems: "stretch",

  "& > *:not(:last-child)": {
    marginRight: "1rem",
  },
});

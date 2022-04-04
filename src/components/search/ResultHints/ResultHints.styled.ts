import { Link, styled } from "@mui/material";

export const ResultHintsBlock = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",

  "& > *:not(:last-child)": {
    marginRight: theme.spacing(2),
  },
}));

export const ResultHintLink = styled(Link)({
  cursor: "pointer",
  textDecoration: "none",
});

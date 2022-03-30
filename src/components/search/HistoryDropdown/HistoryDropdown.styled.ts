import { CardContent, styled } from "@mui/material";

export const DropdownCardContent = styled(CardContent)(({ theme }) => ({
  paddingLeft: 0,
  paddingRight: 0,
  paddingTop: theme.spacing(1),
  paddingBottom: `${theme.spacing(1)} !important`,
}));

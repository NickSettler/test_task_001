import { Box, Breadcrumbs, Stack, styled } from "@mui/material";

export const WeatherDataContainer = styled(Stack)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

export const WeatherDataBreadcrumbs = styled(Breadcrumbs)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

export const WeatherDataInfoSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

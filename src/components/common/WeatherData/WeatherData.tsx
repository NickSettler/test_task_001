import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import { WeatherDataProps } from "./WeatherData.types";
import {
  currentWeatherItemSelector,
  isLoadingWeatherItemSelector,
  selectedPlaceSelector,
} from "../../../modules/weather";
import { Breadcrumbs, CircularProgress, Typography } from "@mui/material";
import { WeatherDataContainer } from "./WeatherData.styled";

const WeatherData = (props: WeatherDataProps): JSX.Element => {
  const { currentWeatherItem, isLoading } = props;

  if (isLoading)
    return (
      <WeatherDataContainer>
        <CircularProgress />
      </WeatherDataContainer>
    );

  if (!currentWeatherItem) return <div />;

  return (
    <WeatherDataContainer direction={"column"}>
      <Breadcrumbs>
        <Typography>{currentWeatherItem.parent.title}</Typography>
        <Typography color={"text.primary"}>
          {currentWeatherItem.title}
        </Typography>
      </Breadcrumbs>
    </WeatherDataContainer>
  );
};

const mapStateToProps = (state: any) => ({
  selectedPlace: selectedPlaceSelector(state),
  currentWeatherItem: currentWeatherItemSelector(state),
  isLoading: isLoadingWeatherItemSelector(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherData);

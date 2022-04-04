import { Dispatch } from "@reduxjs/toolkit";
import { connect } from "react-redux";
import WeatherApi, {
  WeatherData as WeatherDataType,
} from "../../../helpers/api";
import { WeatherDataProps } from "./WeatherData.types";
import {
  currentWeatherItemSelector,
  isLoadingWeatherItemSelector,
  selectedPlaceSelector,
} from "../../../modules/weather";
import {
  Avatar,
  Card,
  CardHeader,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import {
  WeatherDataBreadcrumbs,
  WeatherDataContainer,
} from "./WeatherData.styled";

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
      <WeatherDataBreadcrumbs>
        <Typography>{currentWeatherItem.parent.title}</Typography>
        <Typography color={"text.primary"}>
          {currentWeatherItem.title}
        </Typography>
      </WeatherDataBreadcrumbs>
      <Grid container spacing={4}>
        {currentWeatherItem.consolidated_weather.map(
          (weather: WeatherDataType) => (
            <Grid xs={12} sm={6} md={4} lg={3} item key={weather.id}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      alt={weather.weather_state_name}
                      src={WeatherApi.getIconUrl(weather.weather_state_abbr)}
                    />
                  }
                  title={weather.weather_state_name}
                  subheader={`
                    ${Math.round(weather.min_temp)}°C - 
                    ${Math.round(weather.max_temp)}°C`}
                />
              </Card>
            </Grid>
          )
        )}
      </Grid>
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

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
  CardContent,
  CardHeader,
  CircularProgress,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import {
  WeatherDataBreadcrumbs,
  WeatherDataContainer,
  WeatherDataInfoSection,
} from "./WeatherData.styled";
import { Air, CloudQueue, Opacity, Thermostat } from "@mui/icons-material";
import { windDirection } from "../../../helpers/api";
import moment from "moment-timezone";

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
      <WeatherDataInfoSection>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4} md={3}>
            <Stack direction={"column"} spacing={1} alignItems={"flex-start"}>
              <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                <Typography variant={"subtitle2"}>Sunrise:</Typography>
                <Typography variant={"body1"}>
                  {moment(currentWeatherItem.sun_rise)
                    .tz(currentWeatherItem.timezone)
                    .format("HH:mm")}
                </Typography>
              </Stack>
              <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
                <Typography variant={"subtitle2"}>Sunset:</Typography>
                <Typography variant={"body1"}>
                  {moment(currentWeatherItem.sun_set)
                    .tz(currentWeatherItem.timezone)
                    .format("HH:mm")}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
              <Typography variant={"subtitle2"}>Current time:</Typography>
              <Typography variant={"body1"}>
                {moment(currentWeatherItem.time)
                  .tz(currentWeatherItem.timezone)
                  .format("HH:mm")}
              </Typography>
            </Stack>
            <Stack direction={"row"} spacing={1} alignItems={"baseline"}>
              <Typography variant={"subtitle2"}>Timezone:</Typography>
              <Typography variant={"body1"}>
                {currentWeatherItem.timezone.replace("_", " ")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </WeatherDataInfoSection>
      <Grid container spacing={4}>
        {currentWeatherItem.consolidated_weather.map(
          (weather: WeatherDataType) => {
            const date = moment(weather.applicable_date)
              .tz(currentWeatherItem.timezone)
              .format("dddd, MMMM Do YYYY");
            return (
              <Grid xs={12} sm={6} md={4} lg={3} item key={weather.id}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar
                        alt={weather.weather_state_name}
                        src={WeatherApi.getIconUrl(weather.weather_state_abbr)}
                      />
                    }
                    title={date}
                    subheader={weather.weather_state_name}
                  />
                  <CardContent>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Thermostat color={"info"} titleAccess={"Temperature"} />
                      <Typography variant={"body1"}>
                        {`${Math.round(weather.min_temp)}°C - 
                          ${Math.round(weather.max_temp)}°C`}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Air color={"info"} titleAccess={"Wind"} />
                      <Typography variant={"body1"}>
                        {Math.round(weather.wind_speed)} km/h{" "}
                        {windDirection(weather.wind_direction_compass)}
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <CloudQueue color={"info"} titleAccess={"Pressure"} />
                      <Typography variant={"body1"}>
                        {Math.round(weather.air_pressure)} hPa
                      </Typography>
                    </Stack>
                    <Stack direction={"row"} spacing={1} alignItems={"center"}>
                      <Opacity color={"info"} titleAccess={"Humidity"} />
                      <Typography variant={"body1"}>
                        {Math.round(weather.humidity)} %
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          }
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

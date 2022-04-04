export type PlaceItem = {
  title: string;
  location_type: string;
  latt_long: string;
  woeid: number;
  distance?: number;
};

export type WeatherData = {
  id: number;
  weather_state_name: string;
  weather_state_abbr: AvailableWeatherAbbr;
  wind_direction_compass: Compass16WindRose;
  created: string;
  applicable_date: string;
  min_temp: number;
  max_temp: number;
  the_temp: number;
  wind_speed: number;
  wind_direction: number;
  air_pressure: number;
  humidity: number;
  visibility: number;
  predictability: number;
  time: string;
};

export type WeatherItem = Omit<PlaceItem, "distance"> & {
  timezone: string;
  timezone_name: string;
  time: string;
  sun_rise: string;
  sun_set: string;
  consolidated_weather: WeatherData[];
  parent: Omit<PlaceItem, "distance">;
  sources: Array<{
    title: string;
    slug: string;
    url: string;
    crawl_rate: number;
  }>;
};

export type AvailableWeatherAbbr =
  | "sn"
  | "sl"
  | "h"
  | "t"
  | "hr"
  | "lr"
  | "s"
  | "hc"
  | "lc"
  | "c";

export type CompassSideAbbr = "N" | "E" | "S" | "W";
export type CompassSide = "North" | "East" | "South" | "West";
export type Compass16WindRose =
  `${CompassSideAbbr}${CompassSideAbbr}${CompassSideAbbr}`;

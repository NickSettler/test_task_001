import axios from "axios";

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
  weather_state_abbr: string;
  wind_direction_compass: string;
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

export default class WeatherApi {
  private static _instance: WeatherApi;
  private static _apiUrl: string = "https://www.metaweather.com/api/";

  private constructor() {}

  public static getInstance(): WeatherApi {
    if (!WeatherApi._instance) WeatherApi._instance = new WeatherApi();

    return WeatherApi._instance;
  }

  public queryPlace(query: string): Promise<Array<PlaceItem>> {
    return axios
      .get<Array<PlaceItem>>(
        `https://cors-proxy-ns.herokuapp.com/${WeatherApi._apiUrl}/location/search/?query=${query}`
      )
      .then((response) => {
        return response.data;
      });
  }

  public queryWeather(
    woeid: number,
    date: `${number}/${number}/${number}` | "" = ""
  ): Promise<WeatherItem> {
    return axios
      .get<WeatherItem>(
        `https://cors-proxy-ns.herokuapp.com/${WeatherApi._apiUrl}/location/${woeid}/${date}`
      )
      .then((response) => {
        return response.data;
      });
  }
}

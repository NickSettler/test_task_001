import axios from "axios";
import { AvailableWeatherAbbr, PlaceItem, WeatherItem } from "./types";

export default class WeatherApi {
  private static _instance: WeatherApi;
  private static _apiUrl: string =
    process.env.NODE_ENV === "development"
      ? "https://cors-proxy-ns.herokuapp.com/https://www.metaweather.com/api/"
      : "https://www.metaweather.com/api/";

  private constructor() {}

  public static getInstance(): WeatherApi {
    if (!WeatherApi._instance) WeatherApi._instance = new WeatherApi();

    return WeatherApi._instance;
  }

  public queryPlace(query: string): Promise<Array<PlaceItem>> {
    return axios
      .get<Array<PlaceItem>>(
        `${WeatherApi._apiUrl}/location/search/?query=${query}`
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
      .get<WeatherItem>(`${WeatherApi._apiUrl}/location/${woeid}/${date}`)
      .then((response) => {
        return response.data;
      });
  }

  public static get iconUrl(): string {
    return "https://www.metaweather.com/static/img/weather/";
  }

  public static getIconUrl(icon: AvailableWeatherAbbr): string {
    return `${WeatherApi.iconUrl}${icon}.svg`;
  }
}

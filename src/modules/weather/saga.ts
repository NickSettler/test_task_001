import { AnyAction } from "@reduxjs/toolkit";
import { all, fork, put, takeLatest } from "redux-saga/effects";
import {
  actionTypes,
  setCurrentWeatherItem,
  setIsWeatherItemLoading,
} from "./actions";
import WeatherApi, { PlaceItem, WeatherItem } from "../../helpers/api";

export function* weatherSaga() {
  yield all([fork(selectedPlaceChangeWatcher)]);
}

export function* selectedPlaceChangeWatcher() {
  yield takeLatest(actionTypes.SET_SELECTED_PLACE, selectedPlaceChangeWorker);
}

export function* selectedPlaceChangeWorker({ payload }: AnyAction) {
  try {
    yield put(setIsWeatherItemLoading(true));

    const { place }: { place: PlaceItem } = payload;

    const { response }: { response: WeatherItem } =
      yield WeatherApi.getInstance()
        .queryWeather(place.woeid)
        .then((response) => ({ response }))
        .catch((error) => ({ error }));

    if (response) {
      yield put(setCurrentWeatherItem(response));
    }
  } finally {
    yield put(setIsWeatherItemLoading(false));
  }
}

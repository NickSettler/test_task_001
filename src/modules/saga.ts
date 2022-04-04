import { all, fork } from "redux-saga/effects";
import { historySaga } from "./history";
import { initSaga } from "./init";
import { weatherSaga } from "./weather";

function* rootSaga() {
  yield all([fork(initSaga), fork(historySaga), fork(weatherSaga)]);
}

export default rootSaga;

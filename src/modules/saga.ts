import { all, fork } from "redux-saga/effects";
import { historySaga } from "./history";
import { initSaga } from "./init/saga";

function* rootSaga() {
  yield all([fork(initSaga), fork(historySaga)]);
}

export default rootSaga;

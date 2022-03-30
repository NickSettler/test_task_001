import { all, fork } from "redux-saga/effects";
import { historySaga } from "./history";

function* rootSaga() {
  yield all([fork(historySaga)]);
}

export default rootSaga;

import { all, fork } from "redux-saga/effects";

function* rootSaga() {
  yield all([
    // fork(someSaga),
  ]);
}

export default rootSaga;

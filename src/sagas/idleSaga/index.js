import { put, call, takeLatest } from "redux-saga/effects";
import { getColorsCounterTime } from "../../reducers/idleReducer"; //action async
import { getCounterTimeApi } from "../../conf/api/index";

function* workerSaga() {
  try {
    const response = yield call(getCounterTimeApi);
    const data = response.data;
    yield put({ type: getColorsCounterTime.success.TYPE, payload: data });
  } catch (error) {
    console.log(error);
    yield put({ type: getColorsCounterTime.failure.TYPE, payload: error });
  }
}

export function* colorTimeCounterSaga() {
  yield takeLatest(getColorsCounterTime.TYPE, workerSaga);
}

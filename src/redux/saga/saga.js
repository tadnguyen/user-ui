import { all } from "redux-saga/effects";
import { watchUsersAsync } from "./userSaga";
export default function* rootSaga() {
  yield all([watchUsersAsync()]);
}

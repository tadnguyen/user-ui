import { call, put, takeLatest } from "redux-saga/effects";
import * as types from "../contants/user";
import { getAllUserSuccess } from "../actions/usersAction";
import { getUsers } from "../../apis/users.api";
const typeUser = types;

export const getUsersSagas = function* ({ payload }) {
  try {
    const { params } = payload;
    let response = yield call(getUsers, params);
    if (response.status === 200) {
      yield put(getAllUserSuccess(response.data));
    }
  } catch (err) {
    let { data } = err.response;
    console.log("error", data);
  }
};

export function* watchUsersAsync() {
  yield takeLatest(typeUser.GET_USER_REQ, getUsersSagas);
}

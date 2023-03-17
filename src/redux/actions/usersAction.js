import { GET_USER_REQ, GET_USER_SUCCESS, SORT_BY_USERNAME, SORT_BY_USER_FULLNAME } from "../contants/user";

export const getAllUserReq = params => ({
  type: GET_USER_REQ,
  payload: {
    params
  }
});

export const getAllUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: {
    data
  }
});

export const sortByUserFullName = (data, type) => ({
  type: SORT_BY_USER_FULLNAME,
  payload: {
    data,
    type
  }
});
export const sortByUserName = (data, type) => ({
  type: SORT_BY_USERNAME,
  payload: {
    data,
    type
  }
});
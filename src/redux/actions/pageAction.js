import * as types from '../contants/page';

export const setUsersPage = (data, type) => ({
  type: types.SET_USERS_PAGE,
  payload: {
    data,
    type
  }
});

export const setUsersPerPage = (data, type) => ({
  type: types.SET_USERS_PER_PAGE,
  payload: {
    data,
    type
  }
});

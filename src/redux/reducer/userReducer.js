import * as types from "../contants/user";

const _ = require('lodash');
const initialState= {
  users: [],
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_SUCCESS: {
      let data = action.payload.data.results;
      let newState = _.cloneDeep(state);
      newState.users = _.cloneDeep(data); 
      return newState;
    }
    case types.SORT_BY_USER_FULLNAME: {
      let data = action.payload.data.usersSort;
      let newState = _.cloneDeep(state);
      newState.users = _.cloneDeep(data);
      return newState;
    }
    case types.SORT_BY_USERNAME: {
      let data = action.payload.data.usersSort;
      let newState = _.cloneDeep(state);
      newState.users = _.cloneDeep(data);
      return newState;
    }
    default:
      return state;
  }
};

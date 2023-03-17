import * as types from "../contants/page";

const initialState = {
    usersPage: 0,
    usersPerPage: 10
  };
  const pageReducer = (state = initialState, action) => {
    switch (action.type) {
      case types.SET_USERS_PAGE: {
        console.log(action,'ac');
        return { ...state, usersPage: action.payload.data };
      }
      case types.SET_USERS_PER_PAGE: {
        console.log(action,'acc');
        return { ...state, usersPerPage: action.payload.data };;
      }
      default:
        return state;
    }
  };
  
  export { pageReducer };
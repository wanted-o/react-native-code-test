import { GET_USERS_SUCCESS, GET_USERS_FAILURE, GET_USERS_ATTEMPT, USERS_REFRESH } from '../actions/index';

const initialState = {
  users: [],
  noMore: '',
  isLoading: false,
  refreshing: false,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_USERS_ATTEMPT:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: [
          ...state.users,
          ...action.data.data,
        ],
        refreshing: false,
        isLoading: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        refreshing: false,
        isLoading: false,
        noMore: action.msg,
      };
    case USERS_REFRESH:
      return {
        ...state,
        users: [],
        refreshing: true,
        noMore: '',
      };
    default:
      return state;
  }
};

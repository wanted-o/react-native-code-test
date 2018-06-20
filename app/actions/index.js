/** get users */
export const GET_USERS_ATTEMPT = 'GET_USERS_ATTEMPT';
export const getUsersAttempt = page => ({ type: GET_USERS_ATTEMPT, page });

export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const getUsersSuccess = data => ({ type: GET_USERS_SUCCESS, data });

export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const getUsersFailure = msg => ({ type: GET_USERS_FAILURE, msg });

export const USERS_REFRESH = 'USERS_REFRESH';
export const usersRefresh = () => ({ type: USERS_REFRESH });

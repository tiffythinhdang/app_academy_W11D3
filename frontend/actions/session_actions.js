import * as APIUtil from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';

export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

// regular action
export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  user: currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// thunk action creator
export const login = user => dispatch => (
  APIUtil.login(user)
  .then( user => dispatch(receiveCurrentUser(user)) )
);

export const signup = user => dispatch => (
  APIUtil.signup(user)
    .then( user => dispatch(receiveCurrentUser(user)) )
);

export const logout = () => dispatch => (
  APIUtil.logout()
    .then( () => dispatch(logoutCurrentUser()) )
);
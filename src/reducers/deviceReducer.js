import * as types from '../actions/actionTypes';

export default function userReducer(state=[], action) {
  switch (action.type) {
    case types.FETCH_DEVICES:
      return action.data;
    default:
      return state;
  }
}
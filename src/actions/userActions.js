import firebaseApi from '../api/firebase';
import * as types from './actionTypes';

import { authLoggedIn } from './authActions';
import {ajaxCallError, beginAjaxCall} from './ajaxStatusActions';

function extractUserProperties(firebaseUser, displayName) {

  const user = {};
  const userProperties = [
    'displayName',
    'email',
    'emailVerified',
    'isAnonymous',
    'photoURL',
    'providerData',
    'providerId',
    'refreshToken',
    'uid',
    'isAdmin'
  ];

  userProperties.map((prop) => {
    if (prop in firebaseUser) {
      user[prop] = firebaseUser[prop];
    }
  });
  user.displayName = user.displayName || displayName;
  return user;
}

export function userCreated(user, displayName) {
  return (dispatch) => {
    firebaseApi.databaseSet('/users/' + user.uid, extractUserProperties(user, displayName))
      .then(
        () => {
          dispatch(authLoggedIn(user.uid));
          dispatch(userCreatedSuccess());
        })
      .catch(
        error => {
          dispatch(ajaxCallError(error));
          // @TODO better error handling
          throw(error);
        });
  };
}

export function fetchDevices() {
  return (dispatch) => {
    firebaseApi.getDevices().then(
        (data) => {
          firebaseApi.makeADevicesCopy(data.val());
          dispatch({type: types.FETCH_DEVICES, data: data.val()});
        })
      .catch(
        error => {
          dispatch(ajaxCallError(error));
          // @TODO better error handling
          throw(error);
        });
  };
}

export function fetchMyCheckedOutDevices() {
  return (dispatch) => {
    firebaseApi.fetchMyCheckedOutDevices().then(
        (data) => {
          dispatch({type: types.MY_DEVICES, data: data.val()});
        })
      .catch(
        error => {
          dispatch(ajaxCallError(error));
          // @TODO better error handling
          throw(error);
        });
  };
}

export function updateDeviceRecord(path, value, byWhom) {
  return (dispatch) => {
    firebaseApi.updateDeviceRecord(path, value, byWhom).then(
        () => {
          dispatch(fetchDevices());
        })
      .catch(
        error => {
          dispatch(ajaxCallError(error));
          // @TODO better error handling
          throw(error);
        });
  };
}

export function userCreatedSuccess() {
  return {
    type: types.USER_CREATED_SUCCESS
  };
}

export function userLoadedSuccess(user) {
  return {
    type: types.USER_LOADED_SUCCESS, user: extractUserProperties(user)
  };
}

export function userIsAdminSuccess() {
  return {
    type: types.USER_IS_ADMIN_SUCCESS
  };
}

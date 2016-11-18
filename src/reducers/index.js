import {combineReducers} from 'redux';
import user from './userReducer';
import devices from './deviceReducer';
import routesPermissions from './routesPermissionsReducer';
import auth from './authReducer';

import ajaxCallsInProgress from './ajaxStatusReducer';
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
  routing: routerReducer,
  routesPermissions,
  user,
  devices,
  auth,
  ajaxCallsInProgress
});

export default rootReducer;

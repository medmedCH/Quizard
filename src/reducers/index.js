import { combineReducers } from 'redux';
import alert from './alert';

import auth from './auth';
import forgot from './forgot';
import claims from './claims'
import profile from "./profile";
import post from './post'
import classe from './classe'
export default combineReducers({

    alert, auth, forgot, profile, post, claims, classe

});




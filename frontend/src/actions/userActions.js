import Axios from 'axios';
import Cookie from 'js-cookie';
import { USER_SIGNIN_REQUEST, USER_SIGNING_SUCCESS, USER_SIGNING_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../constants/userConstants';

const signin = (email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
        console.log("after requesting  => "+ email);
        const {data} = await Axios.post("/api/users/signin", {email, password});
        dispatch({type: USER_SIGNING_SUCCESS, payload: data});
        console.log("after success  => "+ data);
        Cookie.set('UserInfo', JSON.stringify(data));
    } catch (error) {
        console.log("after fail  => "+ error.message);
        dispatch({type: USER_SIGNING_FAIL, payload: error.message});
    }
};

const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({type: USER_REGISTER_REQUEST, payload: {name, email, password}});
        console.log("after requesting  => "+ email);
        const {data} = await Axios.post("/api/users/register", {name, email, password});
        dispatch({type: USER_REGISTER_SUCCESS, payload: data});
        console.log("after success  => "+ data);
        Cookie.set('UserInfo', JSON.stringify(data));
    } catch (error) {
        console.log("after fail  => "+ error.message);
        dispatch({type: USER_REGISTER_FAIL, payload: error.message});
    }
};

export {signin, register};
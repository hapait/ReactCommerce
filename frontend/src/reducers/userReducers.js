import { USER_SIGNIN_REQUEST, USER_SIGNING_SUCCESS, USER_SIGNING_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../constants/userConstants";

function userSigninReducer(state={}, action){
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return {loading: true};
        case USER_SIGNING_SUCCESS:
            console.log("signing succes");
            return {loading: false, userInfo: action.payload};
        case USER_SIGNING_FAIL:
            return {loading: false, errod: action.payload};
        default:
            return state;
    }
};
function userRegisterReducer(state={}, action){
    switch(action.type){
        case USER_REGISTER_REQUEST:
            return {loading: true};
        case USER_REGISTER_SUCCESS:
            console.log("signing succes");
            return {loading: false, userInfo: action.payload};
        case USER_REGISTER_FAIL:
            return {loading: false, errod: action.payload};
        default:
            return state;
    }
}
export {userSigninReducer, userRegisterReducer};
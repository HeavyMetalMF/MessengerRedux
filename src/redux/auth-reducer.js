import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'set-user-data';
const GET_CAPTCHA = 'GET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,
    captchaUrl: null,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
            case GET_CAPTCHA:
                debugger
            return {
                ...state,
                captchaUrl: action.captchaUrl,
            };
        // stateCopy.messageText = '';
        // stateCopy.messages.push({id: 6, message: message});

        default:
            return state;
    }

}

export const setCaptchaUrl = (captchaUrl) => {
    return {
        type: GET_CAPTCHA,
        captchaUrl: captchaUrl,
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId: userId,
            email: email,
            login: login,
            isAuth: isAuth,
        }
    }
}
// export const getAuthUserData = () => {
//     return (dispatch) => {
//         return authAPI.me()
//             .then(response => {
//                 if (response.data.resultCode === 0){
//                     let {id, email, login} = response.data.data;
//                     dispatch(setAuthUserData(id, email, login, true));
//                 }
//             })
//     }
// }

export const getAuthUserData = () =>
    async (dispatch) => {
        let response = await authAPI.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

export const login = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    if (response.data.resultCode === 10){
                        dispatch(getCaptchaUrl());
                    }
                    let message = response.data.messages[0];
                    let action = stopSubmit('login', {_error: message});
                    dispatch(action);
                }
            })
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        debugger
        let response = await authAPI.getCaptchaUrl()
        dispatch(setCaptchaUrl(response.data.url));

    }
}
export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false));
                }
            })
    }
}
export default authReducer;
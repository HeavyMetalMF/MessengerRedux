import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'set-user-data';
const SEND_MESSAGE = 'send-message';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: true,
    isAuth: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        // stateCopy.messageText = '';
        // stateCopy.messages.push({id: 6, message: message});

        default:
            return state;
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

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else {
                    let message = response.data.messages[0];
                    let action = stopSubmit('login', {_error: message});
                    debugger;
                    dispatch(action);
                }
            })
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
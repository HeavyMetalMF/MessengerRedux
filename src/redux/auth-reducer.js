import {authAPI} from "../api/api";

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
                ...action.data,
                isAuth: true
            };
            // stateCopy.messageText = '';
            // stateCopy.messages.push({id: 6, message: message});

        default:
            return state;
    }

}

export const  setAuthUserData = (userId, email, login) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId: userId,
            email: email,
            login: login,
        }
    }
}
export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            })
    }
}
export default authReducer;
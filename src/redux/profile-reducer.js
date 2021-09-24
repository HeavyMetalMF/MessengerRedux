import {profileAPI, usersAPI} from "../api/api";
import {setFollowingProgress, unfollowSuccess} from "./users-reducer";

const ADD_POST = 'add-post';
const UPDATE_TEXT = 'update-text';
const SET_USER_PROFILE = 'SetUserProfile';
const SET_STATUS = 'SetStatus';

let initialState = {
    posts : [
        {
            id: 1,
            message: 'Привет как дела',
            likes: 0
        },
        {
            id: 2,
            message: 'Это мой пост',
            likes: 9
        },
    ],
    newPostText: 'romanPrivet',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_TEXT:{
            return {
                ...state,
                newPostText: action.text
            };
        }
        case SET_USER_PROFILE:{
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS:{
            return {
                ...state,
                status: action.status
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT,
        text: text
    }
}
export const setUsersProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    }
}
export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status,
    }
}
export const getUsersProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId)
            .then(response => {
                dispatch(setUsersProfile(response.data));
            })
    }
}
export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(response => {
                dispatch(setStatus(response.data));
            })
    }
}
export const updateStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0){
                    dispatch(setStatus(status));
                }
            })
    }
}
export default profileReducer;
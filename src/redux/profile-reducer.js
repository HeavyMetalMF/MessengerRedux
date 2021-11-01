import {profileAPI, usersAPI} from "../api/api";
import {setFollowingProgress, unfollowSuccess} from "./users-reducer";
import {stopSubmit} from "redux-form";

const ADD_POST = 'add-post';
const SET_USER_PROFILE = 'SetUserProfile';
const SET_STATUS = 'SetStatus';
const SET_PHOTO = 'SET_PHOTO';


let initialState = {
    posts: [
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
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.postText,
                likes: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case SET_PHOTO:
            return {...state, profile: {...state.profile, photos: action.photos}};
        default:
            return state;
    }
}

export const addPostActionCreator = (postText) => {
    return {
        type: ADD_POST,
        postText: postText
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

export const setPhoto = (photo) => {
    return {
        type: SET_PHOTO,
        photos: photo,
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
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            })
    }
}

export const savePhoto = (photo) => {
    return async (dispatch) => {
        let response = await profileAPI.savePhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(setPhoto(response.data.data.photos));
        }
    }
}

export const saveProfile = (profileData) => {
    return async (dispatch, getState) => {
        let userId = getState().auth.userId
        let response = await profileAPI.saveProfile(profileData)
        if (response.data.resultCode === 0) {
            dispatch(getUsersProfile(userId));
        } else {
            let message = response.data.messages[0];
            let action = stopSubmit('edit-profile', {_error: message});
            dispatch(action);
            return Promise.reject(message);
        }
    }
}
export default profileReducer;
import {profileAPI, usersAPI} from "../api/api";
import {setFollowingProgress, unfollowSuccess} from "./users-reducer";

const ADD_POST = 'add-post';
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
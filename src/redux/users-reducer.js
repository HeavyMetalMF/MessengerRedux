import {usersAPI} from "../api/api";

const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';
const SET_CURRENT_PAGE = 'setCurrentPage';
const SET_TOTAL_USERS_COUNT = 'setTotalCount';
const TOGGLE_IS_FETCHING = 'toggleIsFetching';
const TOGGLE_IS_FOLLOWING = 'toggleIsFollowing';

let initialState = {
    users : [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [2,3],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                // users: [...state.users],
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: true}
                    }
                    return user;
                }),
            }
        case UNFOLLOW:
            return  {
                ...state,
                // users: [...state.users],
                users: state.users.map(user => {
                    if (user.id === action.userId){
                        return {...user, followed: false}
                    }
                    return user;
                }),
            }
        case SET_USERS:
            return {...state, users: [...action.users]}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProgress: action.followingInProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }


        default:
            return state;
    }
}

export const  followSuccess = (ID) => {
    return {
        type: FOLLOW,
        userId: ID
    }
}
export const  unfollowSuccess = (ID) => {
    return {
        type: UNFOLLOW,
        userId: ID
    }
}
export const  setUsers = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}
export const  setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage
    }
}
export const  setTotalUsersCount = (totalUsersCount) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: totalUsersCount
    }
}
export const  setIsFetching = (isFetching) => {
    return {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
}
export const  setFollowingProgress = (following, userId) => {
    return {
        type: TOGGLE_IS_FOLLOWING,
        followingInProgress: following,
        userId: userId,
    }
}

export const requestUsers = (page, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true));
        dispatch(setCurrentPage(page));
        usersAPI.getUsers(page, pageSize)
            .then(data => {
                // console.log(data)
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount));
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        usersAPI.follow(userId).then(
            data => {
                if (data.resultCode === 0){
                    dispatch(followSuccess(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            }
        )
    }
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(setFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(
            data => {
                if (data.resultCode === 0){
                    dispatch(unfollowSuccess(userId));
                }
                dispatch(setFollowingProgress(false, userId));
            }
        )
    }
}

export default usersReducer;
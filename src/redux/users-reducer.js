const FOLLOW = 'follow';
const UNFOLLOW = 'unfollow';
const SET_USERS = 'setUsers';

let initialState = {
    users : [
        // {id: 1, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Roman', status: 'I am a boss Roman', location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 2, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: true, fullname: 'Alina', status: 'I am a boss Alina', location: {city: 'Moscow', country: 'Russia'}},
        // {id: 3, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Nastya', status: 'I am a boss Nastya', location: {city: 'Kiev', country: 'Ukraine'}},
        // {id: 4, photoURL: 'https://whatsism.com/uploads/posts/2018-07/1530546590_tx962vdsiqi.jpg', followed: false, fullname: 'Natalya', status: 'I am a boss Natalya', location: {city: 'Kassel', country: 'Germany'}},
    ]
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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

export const followAC = (ID) => {
    return {
        type: FOLLOW,
        userId: ID
    }
}
export const  unfollowAC = (ID) => {
    return {
        type: UNFOLLOW,
        userId: ID
    }
}
export const  setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users
    }
}

export default usersReducer;
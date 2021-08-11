const ADD_POST = 'add-post';
const UPDATE_TEXT = 'update-text';

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
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const  updateTextActionCreator = (text) => {
    return {
        type: UPDATE_TEXT,
        text: text
    }
}

export default profileReducer;
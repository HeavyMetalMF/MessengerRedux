import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
    initialized: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true,
            };
        default:
            return state;
    }
}

export const  initialize_sucsess = () => {
    return {
        type: SET_INITIALIZED,
    }
}

export const initializeApp = () => {
    return (dispatch) => {
        let dispatchResultPromise = dispatch(getAuthUserData());
        dispatchResultPromise.then(() => {
            dispatch(initialize_sucsess());
        })
        // dispatchResultPromise.then(dispatch(initialize_sucsess));
    }
}

export default appReducer;
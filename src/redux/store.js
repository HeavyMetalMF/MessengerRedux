import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage : {
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
        },
        messagesPage : {
            dialogs : [
                {
                    id: 1,
                    name: 'Диалог 1'
                },
                {
                    id: 2,
                    name: 'Диалог 2'
                },
                {
                    id: 3,
                    name: 'Диалог 3'
                },
                {
                    id: 4,
                    name: 'Диалог 4'
                },
                {
                    id: 5,
                    name: 'Диалог 5'
                },
            ],
            messages : [
                {
                    id: 1,
                    message: 'Сообщение 1'
                },
                {
                    id: 2,
                    message: 'Сообщение 2'
                },
                {
                    id: 3,
                    message: 'Сообщение 3'
                },
                {
                    id: 4,
                    message: 'Сообщение 4'
                },
                {
                    id: 5,
                    message: 'Сообщение 5'
                },
            ],
            messageText: 'text',
        },
        sidebar: {},
    },
    getState(){
        return this._state;
    },
    callSubscriber () {
        console.log('state changed')
    },
    subscribe (observer)  {
        this.callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this.callSubscriber(this._state);
    }
}

export default store;
window.store = store;
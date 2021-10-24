const SEND_MESSAGE = 'send-message';

let initialState = {
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

};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let message = action.messageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: message}],
            };
            // stateCopy.messageText = '';
            // stateCopy.messages.push({id: 6, message: message});

        default:
            return state;
    }

}

export const  sendMessageCreator = (messageBody) => {
    return {
        type: SEND_MESSAGE,
        messageBody: messageBody
    }
}
export default messagesReducer;
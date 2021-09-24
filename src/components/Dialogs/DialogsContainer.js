import {sendMessageCreator, updateMessageCreator} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import React from "react";
import {withAuthRedirect} from "../../Hoc/withAuthRedirect";
import {compose} from "redux";


// const DialogsContainer = (prop) => {
//     // console.log(prop)
//
//
//     return <StoreContext.Consumer>
//         {
//         (store) => {
//             let onSendMessageClick = () => {
//                 store.dispatch(sendMessageCreator())
//             }
//             let onNewMessageChange = (text) => {
//                 store.dispatch(updateMessageCreator(text))
//             }
//             return <Dialogs messagesPage={store.getState().messagesPage}
//                             updateMessageCreator={onNewMessageChange}
//                             sendMessage={onSendMessageClick}/>
//         }
//     }
//     </StoreContext.Consumer>
// }

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageCreator: (text) => {dispatch(updateMessageCreator(text))},
        sendMessage: () => {dispatch(sendMessageCreator())}
    }
}



// const AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
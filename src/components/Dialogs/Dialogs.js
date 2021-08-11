import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (prop) => {
    // console.log(prop)
    let state = prop.messagesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let messageText = state.messageText;

    let onSendMessageClick = () => {
        prop.sendMessage();
        // prop.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let text = e.target.value;
        // prop.store.dispatch(updateMessageCreator(text))
        prop.updateMessageCreator(text);
    }

    return(
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea onChange={onNewMessageChange} value={messageText} placeholder='Введите сообщение'></textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick} >Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Dialogs;
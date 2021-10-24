import c from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import {Field, FieldArray, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength50 = maxLengthCreator(50);


const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength50]} component={Textarea} name={'messageBody'} placeholder={'Введите сообщение'}/>
            </div>
            <div>
                <Field component={'button'}>Отправить</Field>
            </div>
        </form>
    );
}

const AddMessageReduxForm = reduxForm({
    form: 'addMessage'
})(AddMessageForm)

const Dialogs = (props) => {
    // console.log(props)
    let state = props.messagesPage;
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)

    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let messageText = state.messageText;

    let addNewMessage = (data) => {
        props.sendMessage(data.messageBody);
        data.messageBody = '';
    }

    if (!props.isAuth){
        return <Redirect to={'/login'}/>
    }
    return(
        <div className={c.dialogs}>
            <div className={c.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                <div>{messagesElements}</div>
                <AddMessageReduxForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
}
export default Dialogs;
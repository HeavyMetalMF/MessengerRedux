import c from "./../Dialogs.module.css";


const Message = (prop) => {
    return(
        <div className={c.message}>
            {prop.message}
        </div>
    );
}

export default Message;
import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import c from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    console.log(props)
    return(

        <form onSubmit={props.handleSubmit}>
            {props.error ? <div className={c.summaryErrorForm}>
                {props.error}
            </div> : ''}
            {<div><button onClick={props.activateEditMode}>Сохранить</button></div>}
            ИЗМЕНЕНИЕ
            <div><b>Логин:</b> {<Field name={'fullName'} component={Input} />}</div>
            <div><b>Ищу ли я работу:</b> {<Field name={'lookingForAJob'} component={Input} type='checkbox'/>}</div>
            <div><b>Мои навыки:</b> {<Field  name={'lookingForAJobDescription'} component={Textarea} type='checkbox'/>}</div>
            <div><b>Обо мне:</b> {<Field name={'aboutMe'} component={Textarea} />}</div>
            <div><b>Контакты:</b> {Object.keys(props.profile.contacts).map(key =>
                <div key={key}>{key}: <Field name={'contacts.' + key} component={Input}/></div>)
            }</div>
        </form>
    )
}

const ProfileDataFormRedux = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm);

export default ProfileDataFormRedux;
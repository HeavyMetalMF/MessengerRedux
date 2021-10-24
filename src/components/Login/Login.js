import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import c from './../common/FormsControls/FormsControls.module.css'

const LoginForm = (props) => {
    console.log(props)
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field validate={[required]} name={'email'} component={Input} placeholder='email'/>
                </div>
                <div>
                    <Field validate={[required]} name={'password'} component={Input} placeholder='password'/>
                </div>
                <div>
                    <Field  name={'remember'} component={Input} type='checkbox'/> remember
                </div>
                {props.error ? <div className={c.summaryErrorForm}>
                    {props.error}
                </div> : ''}
                <div>
                    <button type='submit'>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {login})(Login);
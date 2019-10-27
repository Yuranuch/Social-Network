import React from "react"
import {Field, reduxForm} from "redux-form"
import {Input} from "../common/FormsControls/FormsControls"
import {maxLengthCreator, requiredField} from "../../utils/validators/validators"
import styles from "./Login.module.css"
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {loginThunk} from "../../redux/auth-reducer"

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const maxLength10 = maxLengthCreator(20)

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"} component={Input} validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"Password"} type={"password"} name={"password"} component={Input}
                       validate={[requiredField, maxLength10]}/>
            </div>
            <div>
                <Field type={"checkbox"} name={"rememberMe"} component={"input"}/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
            {props.error && <div className={styles.someError}>{props.error}</div>}
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginThunk: (email, password, rememberMe) => {

            dispatch(loginThunk(email, password, rememberMe))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
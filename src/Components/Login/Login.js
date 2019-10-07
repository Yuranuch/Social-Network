import React from "react"
const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    return (
        <form>
            <div>
                <input placeholder={"Login"}/>
            </div>
            <div>
                <input placeholder={"Password"} />
            </div>
            <div>
                <input type={"checkbox"}/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default Login
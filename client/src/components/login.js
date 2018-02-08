import React, { Component } from 'react';


class Login extends Component {

    render() {
        return (
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </form>
        )
    }
}

export default Login;

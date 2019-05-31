import React from 'react'


class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }

    loginHandle = (event)  => {
        this.setState({[event.target.name]: event.target.value})
    }

    loginSubmit = event => {
        localStorage.setItem("username", this.state.username)
    }

    render() {

    return(<div>
        <form>
            <input type="text"
                placeholder="username"
                onChange={this.loginHandle}
                value={this.state.username}
                name="username"
                >
            </input>
            <input type="text"
                placeholder="password"
                onChange={this.loginHandle}
                value={this.state.password}
                name="password"
                >
            </input>
            <button onClick={this.loginSubmit} >Login</button>
        </form>
        </div>
    );
    }
  }


export default Login 
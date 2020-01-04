import React, { Component } from "react"
import UsersManager from "../../modules/UsersManager"
import "./Login.css"

class Login extends Component {

  // Set initial state
  state = {
    userName: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (event) => {
    const stateToChange = {}
    stateToChange[event.target.id] = event.target.value
    this.setState(stateToChange)
  }

  handleLogin = (event) => {
    event.preventDefault()
    UsersManager.getAllUsers()
    .then(usersArray => {
        usersArray.map((user, i) => {
            if(user.userName === this.state.userName && user.password === this.state.password){
                this.props.setUser({
                    id: user.id,
                    userName: this.state.userName,
                    password: this.state.password
                })
                return this.props.history.push("/home");
              }
              if (i === usersArray.length-1 && !localStorage.getItem("credentials") ) return window.alert("Account Not Found. Please Register.")
            })

          })
    

  }

  render() {
    return (
      <body className="loginbody">
      <form onSubmit={this.handleLogin}>
        <fieldset>
        <h1 className="login-title">Welcome to Shoe-Dometer!</h1>
          <div className="login-slogan">
            <h3 className="login-title">Please sign in</h3>
          </div>
            <div className="login-line">
              <hr/>
            </div>
          
          <div className="username">
            <div className="login-subtitle">
                    <div>
                    <input onChange={this.handleFieldChange} type="userName"
                        id="userName"
                        placeholder="User Name"
                        required="" className="login-username" />
                    </div>
            </div>
          </div>

            <div className="login-subtitle">
            <div className="passinput">
                <div>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" className="login-password" />
                </div>
            </div>
            </div>

            <div className="wrapper">
              <div className="button" onClick={this.handleLogin }>
                  Sign in
              </div>
            </div>
        </fieldset>
      </form>
      </body>
    )
  }

}

export default Login
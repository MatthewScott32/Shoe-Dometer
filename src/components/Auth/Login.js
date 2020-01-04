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
        usersArray.map(user => {
            if(user.userName === this.state.userName && user.password === this.state.password){
                this.props.setUser({
                    id: user.id,
                    userName: this.state.userName,
                    password: this.state.password
                })
                this.props.history.push("/current-shoes");
            }
        })
        // no match warning
    })
    

  }

  render() {
    return (
      <body class="loginbody">
      <form onSubmit={this.handleLogin}>
        <fieldset>
        <h1 class="login-title">Welcome to Shoe-Dometer!</h1>
          <div class="login-slogan">
            <h3 class="login-title">Please sign in</h3>
          </div>
            <div class="login-line">
              <hr/>
            </div>
          
          <div class="username">
            <div class="login-subtitle">
                    <div>
                    <input onChange={this.handleFieldChange} type="userName"
                        id="userName"
                        placeholder="User Name"
                        required="" class="login-username" />
                    </div>
            </div>
          </div>

            <div class="login-subtitle">
            <div class="passinput">
                <div>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" class="login-password" />
                </div>
            </div>
            </div>

            <div class="wrapper">
              <div class="button" onClick={this.handleLogin }>
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
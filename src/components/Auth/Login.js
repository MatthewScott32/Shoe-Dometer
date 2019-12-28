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
                this.props.history.push("/home");
            }
        })
        // no match warning
    })
    

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3 class="title">Please sign in</h3>
            <div class="line">
              <hr/>
            </div>
          
          <div class="username">
            <div class="subtitle">
                    <label htmlFor="inputUserName" class="subtitle">User Name:</label>
                    <div>
                    <input onChange={this.handleFieldChange} type="userName"
                        id="userName"
                        placeholder="User Name"
                        required="" />
                    </div>
            </div>
          </div>

            <div class="subtitle">
            <div class="passinput">
                <label htmlFor="inputPassword" class="subtitle">Password:</label>
                <div>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" class="password" />
                </div>
            </div>
            </div>

            <div class="wrapper">
              <div class="button">
                  Sign in
              </div>
            </div>
        </fieldset>
      </form>
    )
  }

}

export default Login
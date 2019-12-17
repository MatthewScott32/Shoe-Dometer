import React, { Component } from "react"
import UsersManager from "../../modules/UsersManager"

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
            <h3>Please sign in</h3>
            <div className="formgrid">
                <label htmlFor="inputUserName">User Name</label>
                <input onChange={this.handleFieldChange} type="userName"
                    id="userName"
                    placeholder="User Name"
                    required="" /><br/>

                <label htmlFor="inputPassword">Password</label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
            </div>
            <button type="submit">
                Sign in
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Login
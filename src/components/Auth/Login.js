import React, { Component } from "react"

class Login extends Component {

  // Set initial state
  state = {
    userName: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleLogin = (e) => {
    e.preventDefault()
    this.props.setUser({
        userName: this.state.userName,
        password: this.state.password
    })
    this.props.history.push("/current-shoes");

  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <fieldset>
            <h3>Please sign in</h3>
            <div className="formgrid">
                <input onChange={this.handleFieldChange} type="userName"
                    id="userName"
                    placeholder="User Name"
                    required="" autoFocus="" />
                <label htmlFor="inputUserName">User Name</label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputPassword">Password</label>
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
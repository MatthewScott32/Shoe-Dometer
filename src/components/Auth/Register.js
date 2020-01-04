import React, { Component } from "react"
import ShoeDometer from "../ShoeDometer"
import UsersManager from "../../modules/UsersManager"
import "./Register.css"


class Registration extends Component {

  // Set initial state
  state = {
    userName: "",
    password: "",
    confirmPassword: "",
    loadingStatus: false
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  constructNewUser = event => {
    // event.preventDefault();
    if(this.state.userName === "" || this.state.password === "" || this.state.confirmPass ==="")
      window.alert("Please Complete Registration");
    else if(this.state.confirmPass !== this.state.password) {window.alert("Password and Confirmation Do Not Match" )}
    else{
      this.setState({ loadingStatus: true });
      const user = {
        userName: this.state.userName,
        password: this.state.password,
       

      };
      UsersManager.post(user)
      .then(newUser => {
        this.props.setUser({
            id: newUser.id,
            userName: this.state.userName,
            password: this.state.password
        })
        this.props.history.push("/home")
       })
    }
  }

  handleRegistration = (event) => {
    event.preventDefault()
    this.constructNewUser({
      userName: this.state.userName,
      password: this.state.password
    })
    this.props.history.push("/home");

  }

  render() {
    return (
      <body className="registerbody">
      <form >
        <fieldset>
            <h1 className="register-title">Welcome to Shoe-Dometer!</h1>
          <div className="register-slogan">
          <h3 className="register-title">Register Today!</h3>
          </div>

          <div className="register-line">
              <hr/>
          </div>

          <div className="formgrid">
            <div className="register-username">
            <input className="register-username" onChange={this.handleFieldChange} type="userName"
              id="userName"
              placeholder="User Name"
              required="" autoFocus="" />
            <label htmlFor="inputUserName"></label><br/><br/>
            </div>

            <div className="register-password">
            <input className="register-password" onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword"></label><br/><br/>
            </div>

            <div className="register-confirm">
            <input className="register-confirm" onChange={this.handleFieldChange} type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              required="" />
            <label htmlFor="inputPassword"></label><br/><br/>
            </div>
            

          </div>
          <div className="register-wrapper">
            <button className="register-button" type="submit" disabled={this.state.loadingStatus} onClick={this.handleRegistration}>
              Register
            </button>
          </div>
        </fieldset>
      </form>
      </body>
    )
  }

}

export default Registration
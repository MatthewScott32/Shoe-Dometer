import React, { Component } from "react"
import ShoeDometer from "../ShoeDometer"
import UsersManager from "../../modules/UsersManager"


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
      <form >
        <fieldset>
            <h1>Welcome to Shoe-Dometer!</h1>
          <h3>Register and Begin Tracking Your Miles Today</h3>
          <div className="formgrid">
            <input onChange={this.handleFieldChange} type="userName"
              id="userName"
              placeholder="User Name"
              required="" autoFocus="" />
            <label htmlFor="inputUserName"></label><br/><br/>

            <input onChange={this.handleFieldChange} type="password"
              id="password"
              placeholder="Password"
              required="" />
            <label htmlFor="inputPassword"></label><br/><br/>

            <input onChange={this.handleFieldChange} type="password"
              id="confirmPass"
              placeholder="Confirm Password"
              required="" />
            <label htmlFor="inputPassword"></label><br/><br/>
            

          </div>
          <button type="submit" disabled={this.state.loadingStatus} onClick={this.handleRegistration}>
            Register
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Registration
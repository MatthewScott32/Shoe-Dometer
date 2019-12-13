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
  constructNewUser = evt => {
    evt.preventDefault();
    if(this.state.email === "" || this.state.password === "" || this.state.confirmPass !== this.state.password) {
      window.alert("Please Complete Registration");
    } else{
      this.setState({ loadinStatus: true });
      const user = {
        userName: this.state.userName,
        password: this.state.password,
       

      };
      UsersManager.post(user)
      .then(() => this.props.history.push("/users"))
    }
  }

  handleRegistration = (event) => {
    event.preventDefault()
    this.props.newUser({
      userName: this.state.userName,
      password: this.state.password
    })
    this.props.history.push("/users");

  }

  render() {
    return (
      <form onSubmit={this.handleRegistration}>
        <fieldset>
            <h1>Welcome to Shoe-Dometer!</h1>
          <h3>Please Sign In</h3>
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
          <button type="submit" disabled={this.state.loadingStatus} onClick={this.constructNewUser}>
            Register
            </button>
        </fieldset>
      </form>
    )
  }

}

export default Registration
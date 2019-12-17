import React, { Component } from "react";
import NavBar from "./Navigation/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./ShoeDometer.css";
import Login from "./Auth/Login";


// localStorage.setItem("currentUser", 1)
// let i = localStorage.getItem("currentUser", 1)

class ShoeDometer extends Component {

    state = {
      user: false
    }
  
    // Check if credentials are in local storage
    //returns true/false
    isAuthenticated = () => localStorage.getItem("credentials") !== null
  
    setUser = (authObj) => {
      /*
        For now, just store the user name and password that
        the customer enters into local storage.
      */
     console.log(authObj)
      localStorage.setItem(
        "credentials",
        JSON.stringify(authObj)
      )
      this.setState({
        user: this.isAuthenticated()
      });
    }
  
    clearUser = () => {
      // localStorage.clear()
      localStorage.removeItem("credentials")
  
      this.setState({user: this.isAuthenticated()})
    }
  
    componentDidMount() {
      this.setState({
        user: this.isAuthenticated()
      })
    }
  render() {
    return (
      <React.Fragment>

<NavBar user={this.state.user} clearUser={this.clearUser} />       
 <ApplicationViews user={this.state.user}
          setUser={this.setUser} 
          isAuthenticated={this.isAuthenticated}/>
      </React.Fragment>
    );
  }
}

export default ShoeDometer;

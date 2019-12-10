import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from './Home/Home'
import Login from './Auth/Login'
import CurrentShoes from './CurrentShoes/CurrentShoe'



export default class ApplicationViews extends Component {
    render() {
     return(
         <>
          <Route exact path="/" render={(props) => {
          return <Home />
        }} />
         <Route path="/login" render={props => {
            return <Login setUser= {this.props.setUser} {...props} />
            }} />
          <Route exact path="/current-shoes" render={(props) => {
          return <CurrentShoes />
        }} />
        </>
     )
   }
}
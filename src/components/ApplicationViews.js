import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from './Home/Home'
import Login from './Auth/Login'
import CurrentShoes from './CurrentShoes/CurrentShoe'
import ShoesList from "./Shoes/ShoesList";
import ShoesForm from "./Shoes/ShoesForm";
import ShoesEditForm from "./Shoes/ShoesEditForm";
import RacesList from "./Races/RacesList";
import RacesForm from "./Races/RacesForm";




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
        <Route exact path="/shoes" render={props => {
                return <ShoesList {...props} />
         }} />
            <Route path="/shoes/new" render={props => {
            return <ShoesForm {...props} />
          }}
        />
           <Route exact path="/races" render={props => {
                return <RacesList {...props} />
         }} />
         <Route path="/shoes/:shoesId(\d+)/edit/" render={props => {
             return <ShoesEditForm {...props}/>
         }}
         />
         <Route path="/races/new" render={props => {
            return <RacesForm {...props} />
          }}
        />
         </>
       )
     }
   }

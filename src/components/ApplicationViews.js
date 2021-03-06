import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Home from './Home/Home'
import Login from './Auth/Login'
import CurrentShoes from './CurrentShoes/CurrentShoes'
import ShoesList from "./Shoes/ShoesList";
import ShoesForm from "./Shoes/ShoesForm";
import ShoesEditForm from "./Shoes/ShoesEditForm";
import RacesList from "./Races/RacesList";
import RacesForm from "./Races/RacesForm";
import RacesEditForm from "./Races/RacesEditForm";
import Registration from "./Auth/Register";
import ShoesCardDetails from "./Shoes/ShoesCardDetails";
import RaceCardDetails from "./Races/RaceCardDetails";



export default class ApplicationViews extends Component {
    render() {
     return(
         <>
          <Route exact path="/home" render={props => {
            //   if (this.props.isAuthenticated()) {
                  return <Home {...props} />
            //   } else {
            //       return <Redirect to="/home" />
            //   }
        }} 
        />
         <Route path="/login" render={props => {
            return <Login setUser= {this.props.setUser} {...props} />
        }} 
        />
         <Route exact path="/register" render={props => {
            return <Registration setUser={this.props.setUser} {...props} />
        }}
        />
          <Route exact path="/current-shoes" render={(props) => {
               if (this.props.isAuthenticated()) {
                return <CurrentShoes {...props} />
            } else {
                return <Redirect to="/login" />
            }
        }} 
        />
        <Route exact path="/shoes" render={props => {
             if (this.props.isAuthenticated()) {
                return <ShoesList {...props} />
            } else {
                return <Redirect to="/login" />
            }
         }} 
         />
         <Route exact path="/shoes/:shoeId(\d+)" render={props => {
                return <ShoesCardDetails {...props} {...this.props} shoeId= {parseInt(props.match.params.shoeId)} />
            }} 
         />
            <Route path="/shoes/new" render={props => {
            return <ShoesForm {...props} />
        }}
        />
           <Route exact path="/races" render={props => {
                if (this.props.isAuthenticated()) {
                    return <RacesList {...props} />
                } else {
                    return <Redirect to="/login" />
                }
         }} 
         />
         <Route path="/shoes/:shoesId(\d+)/edit/" render={props => {
             return <ShoesEditForm {...props}/>
         }}
         />
         <Route path="/races/new" render={props => {
            return <RacesForm {...props} />
         }}
         />
          <Route path="/races/:racesId(\d+)/edit/" render={props => {
             return <RacesEditForm {...props}/>
         }}
         />
          <Route exact path="/races/:raceId(\d+)" render={props => {
                return <RaceCardDetails {...props} {...this.props} raceId= {parseInt(props.match.params.raceId)} />
            }} 
         />
         </>
       )
     }
   }

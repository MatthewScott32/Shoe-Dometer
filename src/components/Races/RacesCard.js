import React, { Component } from "react"
import RaceCardDetails from "./RaceCardDetails"
import "./RaceCard.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class RacesCard extends Component {
    render() {
        return(
                <div class="racecard">
                  <div>
                    <p>Name: {this.props.race.raceName}</p>
                    <p>Location: {this.props.race.raceLocation}</p>
                    <p>Date: {this.props.race.raceDate}</p>
                    <div class="racebutton" onClick={() => {this.props.history.push(`/races/${this.props.race.id}`)}}>Details</div>
                    <div class="racebutton" onClick={() => {this.props.history.push(`/races/${this.props.race.id}/edit`)}}>Edit</div>
                    <div class="racebutton" onClick={() => this.props.deleteRaces(this.props.race.id)}>Delete</div>
                  </div>
                </div>
        )
    }
}

export default RacesCard
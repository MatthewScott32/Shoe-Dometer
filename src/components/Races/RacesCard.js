import React, { Component } from "react"

// import "./RacesCard.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class RacesCard extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <p>Name: {this.props.race.raceName}</p>
                    <p>Location: {this.props.race.raceLocation}</p>
                    <p>Date: {this.props.race.raceDate}</p>
                    <button type="button" onClick={() => this.props.deleteRaces(this.props.race.id)}>Delete</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/races/${this.props.race.id}/edit`)}}>Edit</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/races/${this.props.race.id}`)}}>Details</button><br/>
                    
                </div>
            </div>
        )
    }
}

export default RacesCard
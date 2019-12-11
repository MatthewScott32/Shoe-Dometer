import React, { Component } from "react"
// import "./RacesCard.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class RacesCard extends Component {
    render() {
        return(
            <div>
                <div className="card">
                    <picture>
                        <img src={this.props.race.image} alt="Races"/>
                    </picture>
                    <p>Name:{this.props.race.raceName}</p>
                    <p>Location:{this.props.race.raceLocation}</p>
                    <p>Date:{this.props.race.raceDate}</p>
                    <p>Run Time:{this.props.race.raceTime}</p>
                    <p>Distance:{this.props.race.distance}</p>
                    <p>Placement:{this.props.race.condition}</p>
                </div>
            </div>
        )
    }
}

export default RacesCard
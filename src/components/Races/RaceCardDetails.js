import React, { Component } from "react"
import RaceManager from "../../modules/RaceManager"
// import "./RacesCard.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class RaceCardDetails extends Component {

    state = {
        race:{},
    }

        componentDidMount(){
        RaceManager.get(this.props.raceId)
        .then((raceDetailCard) => {
                this.setState({
                race:raceDetailCard})
        })
      }

        deleteRaces = id => {
            RaceManager.delete(id)
            .then(() => {
                this.props.history.push('/races')
            })
        }

    render() {
        return(
            <div>
                <div className="card">
                    <p>Name: {this.state.race.raceName}</p>
                    <p>Location: {this.state.race.raceLocation}</p>
                    <p>Date: {this.state.race.raceDate}</p>
                    <p>Race Time: {this.state.race.raceTime}</p>
                    <p>Distance: {this.state.race.distance}</p>
                    <p>Placement: {this.state.race.placement}</p>
                    {/* <p>Shoes Used: {this.props.race.shoe.brand} {this.props.race.shoe.model}</p> */}
                    <button type="button" onClick={() => this.deleteRaces(this.state.race.id)}>Delete</button><br/>
                    <button type="button" onClick={() => {this.props.history.push(`/races/${this.state.race.id}/edit`)}}>Edit</button><br/>
                </div>
            </div>
      )
    }
}


export default RaceCardDetails
import React, { Component } from "react"
import RaceManager from "../../modules/RaceManager"
import "./RaceCardDetails.css"
// import { Link } from "react-router-dom"
// import { directive } from "@babel/types"

class RaceCardDetails extends Component {

    state = {
        race:{
            shoe: {
                brand: ""
            }
        },
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
            <body className="racedetailbody">
            <div className="racecarddetails">
                <div>
                    <p>Name: {this.state.race.raceName}</p>
                    <p>Location: {this.state.race.raceLocation}</p>
                    <p>Date: {this.state.race.raceDate}</p>
                    <p>Race Time: {this.state.race.raceTime}</p>
                    <p>Distance: {this.state.race.distance}</p>
                    <p>Placement: {this.state.race.placement}</p>
                    <p>Shoes Used: {this.state.race.shoe.brand} {this.state.race.shoe.model}</p>
                    <div className="racebuttondetails1">
                    <div className="racebuttondetails" onClick={() => {this.props.history.push(`/races/${this.state.race.id}/edit`)}}>Edit</div><br/>
                    <div className="racebuttondetails" onClick={() => this.deleteRaces(this.state.race.id)}>Delete</div><br/>
                    </div>
                </div>
            </div>
            </body>
      )
    }
}


export default RaceCardDetails
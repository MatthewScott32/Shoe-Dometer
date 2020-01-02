import React, { Component } from 'react'
import RacesCard from './RacesCard'
import RacesManager from '../../modules/RaceManager'
import { getUser } from '../../modules/Helpers'
import RaceCardDetails from './RaceCardDetails'
import "./raceslist.css"

class RacesList extends Component {
    state = {
        races:[]
    }

    componentDidMount(){
        RacesManager.getAllAccountRaces(getUser().id)
        .then((racesArray) => {
            this.setState({
                races: racesArray
            })

        })
    }

    deleteRaces = id => {
        RacesManager.delete(id)
        .then(() => {
            RacesManager.getAllAccountRaces(getUser().id)
            .then((newRaces) => {
                this.setState({
                    races: newRaces
                })
            })
        })
    }

    render() {
    return(
        <>
          <button type="button" class="addracebutton" onClick={() => {this.props.history.push("/races/new")}}>Add Race</button>
          <div class="racescontainercards">
            {this.state.races.map(race =>
            <RacesCard
               key={race.id}
               race={race}
               {...this.props}
            deleteRaces={this.deleteRaces}
               />
                )}
          </div>
        </>
    )
  }
}

export default RacesList
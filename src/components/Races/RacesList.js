import React, { Component } from 'react'
import RacesCard from './RacesCard'
import RacesManager from '../../modules/RaceManager'

class RacesList extends Component {
    state = {
        races:[]
    }

    componentDidMount(){
        RacesManager.getAll()
        .then((racesArray) => {
            this.setState({
                races: racesArray
            })

        })
    }

    deleteRaces = id => {
        RacesManager.delete(id)
        .then(() => {
            RacesManager.getAll()
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
          <button type="button" className="section-content" onClick={() => {this.props.history.push("/races/new")}}>Add Race</button>
          <div className="container-cards">
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
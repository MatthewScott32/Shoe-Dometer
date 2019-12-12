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

    render() {
    return(
        <>
         {/* <section className="section-content">
             <button type="button" className="btn" onClick={() => {this.props.history.push("/races/new")}}>Add Race</button>
         </section>
          <div className="container-cards"> */}
            {this.state.races.map(race =>
            <RacesCard
               key={race.id}
               race={race}
               {...this.props}
         //    deleteRace={this.deleteRace}
               />
                )}
          {/* </div> */}
        </>
    )
  }
}

export default RacesList
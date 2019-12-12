import React, { Component } from 'react';
import RacesManager from '../../modules/RaceManager';
// import './RacesForm.css'

class RacesForm extends Component {
    
    state ={
        raceName: "",
        raceLocation: "",
        raceDate: "",
        raceTime: "",
        distance: "",
        placement: "",
        loadingStatus: false,
    };

    handleFieldChange = evt => {
        const stateTochange = {};
        stateTochange[evt.target.id] = evt.target.value;
        this.setState(stateTochange);
    };

    constructNewRaces = evt => {
        evt.preventDefault();
        if (this.state.raceName === "" || this.state.raceLocation === "" 
        || this.state.raceDate === "" || this.state.raceTime=== ""
        || this.state.distance === "" || this.state.placement === "") {
            window.alert("Form Incomplete") 
        } else {
            this.setState({ loadingStatus: true});
            const races = {
                raceName: this.state.raceName,
                raceLocation: this.state.raceLocation,
                raceDate: this.state.raceDate,
                raceTime: this.state.raceTime,
                distance: this.state.distance,
                placement: this.state.placement
            };

            RacesManager.post(races)
            .then(() => this.props.history.push("/races"));
        }
    }


        componentDidMount() {
            RacesManager.getAll()
            .then(races => this.setState({races: races}))
        }

        render() {
            return (
          <>
            <div className="card">
             <div className="card-body">
              <article id="newRacesForm"><h1>New Race</h1>
                <section>
                    <h3>Name</h3>
                    <input type="input" id="raceName" onChange={this.handleFieldChange}/>
                    <h3>Location</h3>
                    <input type="input" id="raceLocation" onChange={this.handleFieldChange}/>
                    <h3>Date</h3>
                    <input type="date" id="raceDate" onChange={this.handleFieldChange}/>
                    <h3>Race Time</h3>
                    <input type="input" id="raceTime" onChange={this.handleFieldChange}/>
                    <h3>Distance</h3>
                    <input type="input" id="distance" onChange={this.handleFieldChange}/>
                    <h3>Placement</h3>
                    <input type="number" id="placement" onChange={this.handleFieldChange}/><br/><br/>
                    <button id="saveRace" disabled={this.state.loadingStatus} onClick={this.constructNewRaces}>Save Race</button>
                </section>
                </article>
              </div>
             </div>
                </>
                )
            }
        }

export default RacesForm
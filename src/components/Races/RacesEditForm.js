import React, { Component } from 'react';
import RacesManager from '../../modules/RaceManager';
// import './RaceForm.css'

class RacesEditForm extends Component {
    
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
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
    };

    updateExistingRaces = evt => {
        evt.preventDefault();
            this.setState({ loadingStatus: true});
            const editedRaces = {
                id: this.props.match.params.racesId,
                // image: this.state.image,
                raceName: this.state.raceName,
                raceLocation: this.state.raceLocation,
                raceDate: this.state.raceDate,
                raceTime: this.state.raceTime,
                distance: this.state.distance,
                placement: this.state.placement
            };

            RacesManager.update(editedRaces)
            .then(() => this.props.history.push("/races"))
        
            }

            componentDidMount() {
                RacesManager.get(this.props.match.params.racesId)
                .then(races => {
                    this.setState({
                        raceName: races.raceName,
                        raceLocation: races.raceLocation,
                        raceDate: races.raceDate,
                        raceTime: races.raceTime,
                        distance: races.distance,
                        placement: races.placement,
                        loadingStatus: false,
                    })
                })
            }

            render() {
                return(
                    <>
                    <form>
                    <fieldset>
                    <div className="formgrid">
                    <h3 htmlFor="raceName">Name</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="raceName"
                    value={this.state.raceName}/>

                    <h3 htmlFor="raceLocation">Location</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="raceLocation"
                    value={this.state.raceLocation}/>

                    <h3 htmlFor="raceDate">Date</h3>
                    <input type="date" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="raceDate"
                    value={this.state.raceDate}/>

                    <h3 htmlFor="raceTime">Race Time</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="dateOfPurchase"
                    value={this.state.dateOfPurchase}/>

                    <h3 htmlFor="distance">Distance</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="distance"
                    value={this.state.distance}/>

                    <h3 htmlFor="placement">Placement</h3>
                    <input type="number" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="placement"
                    value={this.state.placement}/>
                   </div>

                   <div className="alignRight">
                    <button
                    type="button" disabled={this.state.loadingStatus}
                    onClick={this.updateExistingRaces}
                    className="btn btn-primary">
                    Submit</button>
                   </div>
                 </fieldset>
               </form>
              </>
             );
           }
        }
        
    
export default RacesEditForm
import React, { Component } from 'react';
import RacesManager from '../../modules/RaceManager';
import ShoesManager from '../../modules/ShoesManager';
import { getUser } from '../../modules/Helpers';
import './RaceEditForm.css'

class RacesEditForm extends Component {
    
    state ={
        userId: getUser().id,
        shoeId: "",
        raceName: "",
        raceLocation: "",
        raceDate: "",
        raceTime: "",
        distance: "",
        placement: "",
        shoeArray: [],
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
            const currentUser = JSON.parse(localStorage.getItem("currentUser"))
            const editedRaces = {
                id: this.props.match.params.racesId,
                userId: getUser().id,
                // image: this.state.image,
                raceName: this.state.raceName,
                raceLocation: this.state.raceLocation,
                raceDate: this.state.raceDate,
                raceTime: this.state.raceTime,
                distance: this.state.distance,
                placement: this.state.placement,
                shoeId: this.state.shoeId
            };

            RacesManager.update(editedRaces)
            .then(() => this.props.history.push("/races"))
        
            }

            componentDidMount() {
                ShoesManager.getAllAccountShoes(getUser().id)
                .then(shoes => this.setState({shoeArray: shoes}))
                RacesManager.get(this.props.match.params.racesId)
                .then(races => {
                    console.log(races)
                    this.setState({
                        raceName: races.raceName,
                        raceLocation: races.raceLocation,
                        raceDate: races.raceDate,
                        raceTime: races.raceTime,
                        distance: races.distance,
                        placement: races.placement,
                        shoeId: races.shoeId,
                        loadingStatus: false,
                    })
                })
            }
            
            render() {
                console.log("hey", this.state.shoeId)
                return(
                    <>
                    <form class="raceeditform">
                    <fieldset>
                    <div className="formgrid">
                    <h3 htmlFor="raceName">Name</h3>
                    <input class="raceinput" type="input" required 
                    onChange={this.handleFieldChange}
                    id="raceName"
                    value={this.state.raceName}/>

                    <h3 htmlFor="raceLocation">Location</h3>
                    <input class="raceinput" type="input" required 
                    onChange={this.handleFieldChange}
                    id="raceLocation"
                    value={this.state.raceLocation}/>

                    <h3 htmlFor="raceDate">Date</h3>
                    <input class="raceinput" type="date" required 
                    onChange={this.handleFieldChange}
                    id="raceDate"
                    value={this.state.raceDate}/>

                    <h3 htmlFor="raceTime">Race Time</h3>
                    <input class="raceinput" type="input" required 
                    onChange={this.handleFieldChange}
                    id="raceTime"
                    value={this.state.raceTime}/>

                    <h3 htmlFor="distance">Distance</h3>
                    <input class="raceinput" type="input" required 
                    onChange={this.handleFieldChange}
                    id="distance"
                    value={this.state.distance}/>

                    <h3 htmlFor="placement">Placement</h3>
                    <input class="raceinput" type="number" required 
                    onChange={this.handleFieldChange}
                    id="placement"
                    value={this.state.placement}/>
                   </div>

                   <h3 htmlFor="shoeId">Shoes Used</h3>
                   <select class="raceinput"   type="select" id="shoeId" value={this.state.shoeId} onChange={this.handleFieldChange}>
                        <option value="none">Select</option>
                        {this.state.shoeArray.map(shoe => {
                        return <option key={shoe.id} value={shoe.id}>{shoe.brand}: {shoe.model}</option>
                        })
                       }
                    </select><br/><br/>

                   <div>
                    <div class="racesubmit"
                    disabled={this.state.loadingStatus}
                    onClick={this.updateExistingRaces}
                    >
                    Submit</div>
                   </div>
                 </fieldset>
               </form>
              </>
             );
           }
        }
        
    
export default RacesEditForm
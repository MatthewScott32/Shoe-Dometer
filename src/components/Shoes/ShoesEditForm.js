import React, { Component } from 'react';
import ShoesManager from '../../modules/ShoesManager';
import { getUser } from '../../modules/Helpers';
// import './ShoesForm.css'

class ShoesEditForm extends Component {
    
    state ={
        userId: getUser().id,
        // image: "",
        brand: "",
        model: "",
        size: "",
        dateOfPurchase: "",
        mileage: "",
        injuries: "",
        condition: "",
        trailRoadBoth: "",
        weight: "",
        racesUsed: "",
        current: true,
        loadingStatus: true,
    };

    handleFieldChange = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.value;
        this.setState(stateToChange);
    };

    handleCheckbox = event => {
        const stateToChange = {};
        stateToChange[event.target.id] = event.target.checked
        this.setState(stateToChange)
    }

    updateExistingShoes = event => {
        event.preventDefault();
            this.setState({ loadingStatus: true});
            const editedShoes = {
                id: this.props.match.params.shoesId,
                userId: getUser().id,
                // image: this.state.image,
                brand: this.state.brand,
                model: this.state.model,
                size: this.state.size,
                dateOfPurchase: this.state.dateOfPurchase,
                mileage: this.state.mileage,
                injuries: this.state.injuries,
                condition: this.state.condition,
                trailRoadBoth: this.state.trailRoadBoth,
                weight: this.state.weight,
                racesUsed: this.state.racesUsed,
                current: this.state.current
            };

            ShoesManager.update(editedShoes)
            .then(() => this.props.history.push("/shoes"))
        
            }

            componentDidMount() {
                ShoesManager.get(this.props.match.params.shoesId)
                .then(shoes => {
                    this.setState({
                        brand: shoes.brand,
                        model: shoes.model,
                        size: shoes.size,
                        dateOfPurchase: shoes.dateOfPurchase,
                        mileage: shoes.mileage,
                        injuries: shoes.injuries,
                        condition: shoes.condtion,
                        trailRoadBoth: shoes.trailRoadBoth,
                        weight: shoes.weight,
                        racesUsed: shoes.racesUsed,
                        current: shoes.current,
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
                    <h3 htmlFor="brand">Brand</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="brand"
                    value={this.state.brand}/>

                    <h3 htmlFor="model">Model</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="model"
                    value={this.state.model}/>

                    <h3 htmlFor="size">Size</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="size"
                    value={this.state.size}/>

                    <h3 htmlFor="dateOfPurchase">Date Of Purchase</h3>
                    <input type="date" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="dateOfPurchase"
                    value={this.state.dateOfPurchase}/>

                    <h3 htmlFor="mileage">Mileage</h3>
                    <input type="number" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="mileage"
                    value={this.state.mileage}/>

                    <h3 htmlFor="injuries">Injuries</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="injuries"
                    value={this.state.injuries}/>

                    <h3 htmlFor="condition">Condition</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="condition"
                    value={this.state.condition}/>

                    <h3 htmlFor="trailRoadBoth">Trail, Road, Both</h3>
                    <select type="select" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="trailRoadBoth"
                    value={this.state.trailRoadBoth}>
                        <option value="none">Select</option>
                        <option value="Both">Light</option>
                        <option value="Road">Medium</option>
                        <option value="Both">Heavy</option>
                    </select>

                    <h3 htmlFor="weighth">Weight</h3>
                    <select type="select" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="weight"
                    value={this.state.trailRoadBoth}>
                        <option value="none">Select</option>
                        <option value="Light">Light</option>
                        <option value="Medium">Medium</option>
                        <option value="Heavy">Heavy</option>
                    </select>
                    
                    <h3 htmlFor="racesUsed">Races Used</h3>
                    <input type="input" required className="form-control"
                    onChange={this.handleFieldChange}
                    id="racesUsed"
                    value={this.state.racesUsed}/>

                    <h3 htmlFor="current">Current</h3>
                    <input type="checkbox" required className="form-control"
                    onChange={this.handleCheckbox}
                    id="current"
                    value={this.state.current} 
                    checked={this.state.current} />
                   </div>

                   <div className="alignRight">
                    <button
                    type="button" disabled={this.state.loadingStatus}
                    onClick={this.updateExistingShoes}
                    className="btn btn-primary">
                    Submit</button>
                   </div>
                 </fieldset>
               </form>
              </>
             );
           }
        }
        
    
export default ShoesEditForm